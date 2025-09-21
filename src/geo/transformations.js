export const TOLERANCE = 1e-9;

function ensureWeights(length, weights) {
  if (!weights) {
    return Array.from({ length }, () => 1);
  }
  if (weights.length !== length) {
    throw new Error('Weight length mismatch');
  }
  return weights;
}

export function fitSimilarity(pairs, weights) {
  if (pairs.length < 2) {
    return null;
  }

  const w = ensureWeights(pairs.length, weights);
  let weightSum = 0;
  let pixelCentroid = { x: 0, y: 0 };
  let enuCentroid = { x: 0, y: 0 };

  for (let i = 0; i < pairs.length; i += 1) {
    const weight = w[i];
    weightSum += weight;
    pixelCentroid.x += weight * pairs[i].pixel.x;
    pixelCentroid.y += weight * pairs[i].pixel.y;
    enuCentroid.x += weight * pairs[i].enu.x;
    enuCentroid.y += weight * pairs[i].enu.y;
  }

  if (Math.abs(weightSum) < TOLERANCE) {
    return null;
  }

  pixelCentroid = { x: pixelCentroid.x / weightSum, y: pixelCentroid.y / weightSum };
  enuCentroid = { x: enuCentroid.x / weightSum, y: enuCentroid.y / weightSum };

  let sxx = 0;
  let sxy = 0;
  let syx = 0;
  let syy = 0;
  let denom = 0;

  for (let i = 0; i < pairs.length; i += 1) {
    const weight = w[i];
    const px = pairs[i].pixel.x - pixelCentroid.x;
    const py = pairs[i].pixel.y - pixelCentroid.y;
    const ex = pairs[i].enu.x - enuCentroid.x;
    const ey = pairs[i].enu.y - enuCentroid.y;

    sxx += weight * ex * px;
    sxy += weight * ex * py;
    syx += weight * ey * px;
    syy += weight * ey * py;
    denom += weight * (px * px + py * py);
  }

  if (Math.abs(denom) < TOLERANCE) {
    return null;
  }

  const trace = sxx + syy;
  const det = syx - sxy;
  const theta = Math.atan2(det, trace);
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);

  let numerator = 0;

  for (let i = 0; i < pairs.length; i += 1) {
    const weight = w[i];
    const px = pairs[i].pixel.x - pixelCentroid.x;
    const py = pairs[i].pixel.y - pixelCentroid.y;
    const ex = pairs[i].enu.x - enuCentroid.x;
    const ey = pairs[i].enu.y - enuCentroid.y;

    const rotatedPx = cos * px - sin * py;
    const rotatedPy = sin * px + cos * py;
    numerator += weight * (ex * rotatedPx + ey * rotatedPy);
  }

  const scale = numerator / denom;

  if (!Number.isFinite(scale) || Math.abs(scale) < TOLERANCE) {
    return null;
  }

  const translationX = enuCentroid.x - scale * (cos * pixelCentroid.x - sin * pixelCentroid.y);
  const translationY = enuCentroid.y - scale * (sin * pixelCentroid.x + cos * pixelCentroid.y);

  return {
    type: 'similarity',
    scale,
    rotation: theta,
    cos,
    sin,
    translation: { x: translationX, y: translationY },
  };
}

function buildNormalEquations(rows, values, variableCount) {
  const ata = Array.from({ length: variableCount }, () => Array(variableCount).fill(0));
  const atb = Array(variableCount).fill(0);

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex];
    const value = values[rowIndex];

    for (let i = 0; i < variableCount; i += 1) {
      atb[i] += row[i] * value;
      for (let j = i; j < variableCount; j += 1) {
        ata[i][j] += row[i] * row[j];
      }
    }
  }

  for (let i = 0; i < variableCount; i += 1) {
    for (let j = 0; j < i; j += 1) {
      ata[i][j] = ata[j][i];
    }
  }

  return { ata, atb };
}

function gaussianElimination(matrix, vector) {
  const size = vector.length;
  const mat = matrix.map((row) => row.slice());
  const vec = vector.slice();

  for (let pivot = 0; pivot < size; pivot += 1) {
    let maxRow = pivot;
    for (let row = pivot + 1; row < size; row += 1) {
      if (Math.abs(mat[row][pivot]) > Math.abs(mat[maxRow][pivot])) {
        maxRow = row;
      }
    }

    if (Math.abs(mat[maxRow][pivot]) < TOLERANCE) {
      return null;
    }

    if (maxRow !== pivot) {
      [mat[pivot], mat[maxRow]] = [mat[maxRow], mat[pivot]];
      [vec[pivot], vec[maxRow]] = [vec[maxRow], vec[pivot]];
    }

    const pivotValue = mat[pivot][pivot];
    for (let col = pivot; col < size; col += 1) {
      mat[pivot][col] /= pivotValue;
    }
    vec[pivot] /= pivotValue;

    for (let row = 0; row < size; row += 1) {
      if (row === pivot) {
        continue;
      }
      const factor = mat[row][pivot];
      if (Math.abs(factor) < TOLERANCE) {
        continue;
      }
      for (let col = pivot; col < size; col += 1) {
        mat[row][col] -= factor * mat[pivot][col];
      }
      vec[row] -= factor * vec[pivot];
    }
  }

  return vec;
}

function solveLeastSquares(rows, values, variableCount) {
  const { ata, atb } = buildNormalEquations(rows, values, variableCount);
  return gaussianElimination(ata, atb);
}

export function fitAffine(pairs, weights) {
  if (pairs.length < 3) {
    return null;
  }

  const w = ensureWeights(pairs.length, weights);
  const rows = [];
  const values = [];

  for (let i = 0; i < pairs.length; i += 1) {
    const weight = Math.sqrt(w[i]);
    const { x, y } = pairs[i].pixel;
    rows.push([weight * x, weight * y, weight, 0, 0, 0]);
    values.push(weight * pairs[i].enu.x);
    rows.push([0, 0, 0, weight * x, weight * y, weight]);
    values.push(weight * pairs[i].enu.y);
  }

  const solution = solveLeastSquares(rows, values, 6);

  if (!solution) {
    return null;
  }

  const [a, b, c, d, e, f] = solution;

  return {
    type: 'affine',
    matrix: [
      [a, b, c],
      [d, e, f],
    ],
  };
}

export function fitHomography(pairs, weights) {
  if (pairs.length < 4) {
    return null;
  }

  const w = ensureWeights(pairs.length, weights);
  const rows = [];
  const values = [];

  for (let i = 0; i < pairs.length; i += 1) {
    const weight = Math.sqrt(w[i]);
    const { x, y } = pairs[i].pixel;
    const { x: X, y: Y } = pairs[i].enu;

    rows.push([weight * x, weight * y, weight, 0, 0, 0, -weight * X * x, -weight * X * y]);
    values.push(weight * X);
    rows.push([0, 0, 0, weight * x, weight * y, weight, -weight * Y * x, -weight * Y * y]);
    values.push(weight * Y);
  }

  const solution = solveLeastSquares(rows, values, 8);

  if (!solution) {
    return null;
  }

  const [h11, h12, h13, h21, h22, h23, h31, h32] = solution;

  return {
    type: 'homography',
    matrix: [
      [h11, h12, h13],
      [h21, h22, h23],
      [h31, h32, 1],
    ],
  };
}

function applySimilarity(transform, pixel) {
  const { scale, cos, sin, translation } = transform;
  return {
    x: scale * (cos * pixel.x - sin * pixel.y) + translation.x,
    y: scale * (sin * pixel.x + cos * pixel.y) + translation.y,
  };
}

function applyAffine(transform, pixel) {
  const [[a, b, c], [d, e, f]] = transform.matrix;
  return {
    x: a * pixel.x + b * pixel.y + c,
    y: d * pixel.x + e * pixel.y + f,
  };
}

function applyHomography(transform, pixel) {
  const [[h11, h12, h13], [h21, h22, h23], [h31, h32, h33]] = transform.matrix;
  const denominator = h31 * pixel.x + h32 * pixel.y + h33;

  if (Math.abs(denominator) < TOLERANCE) {
    return null;
  }

  return {
    x: (h11 * pixel.x + h12 * pixel.y + h13) / denominator,
    y: (h21 * pixel.x + h22 * pixel.y + h23) / denominator,
  };
}

export function invertSimilarity(transform) {
  const { scale, cos, sin, translation } = transform;
  const invScale = 1 / scale;
  const invCos = cos;
  const invSin = -sin;
  const tx = translation.x;
  const ty = translation.y;

  return {
    type: 'similarity',
    scale: invScale,
    rotation: -transform.rotation,
    cos: invCos,
    sin: invSin,
    translation: {
      x: -invScale * (invCos * tx - invSin * ty),
      y: -invScale * (invSin * tx + invCos * ty),
    },
  };
}

export function invertAffine(transform) {
  const [[a, b, c], [d, e, f]] = transform.matrix;
  const det = a * e - b * d;

  if (Math.abs(det) < TOLERANCE) {
    return null;
  }

  const invA = e / det;
  const invB = -b / det;
  const invD = -d / det;
  const invE = a / det;

  return {
    type: 'affine',
    matrix: [
      [invA, invB, (b * f - c * e) / det],
      [invD, invE, (c * d - a * f) / det],
    ],
  };
}

export function invertHomography(transform) {
  const [[a, b, c], [d, e, f], [g, h, i]] = transform.matrix;
  const det =
    a * (e * i - f * h) -
    b * (d * i - f * g) +
    c * (d * h - e * g);

  if (Math.abs(det) < TOLERANCE) {
    return null;
  }

  const invDet = 1 / det;
  const m00 = (e * i - f * h) * invDet;
  const m01 = (c * h - b * i) * invDet;
  const m02 = (b * f - c * e) * invDet;
  const m10 = (f * g - d * i) * invDet;
  const m11 = (a * i - c * g) * invDet;
  const m12 = (c * d - a * f) * invDet;
  const m20 = (d * h - e * g) * invDet;
  const m21 = (b * g - a * h) * invDet;
  const m22 = (a * e - b * d) * invDet;

  return {
    type: 'homography',
    matrix: [
      [m00, m01, m02],
      [m10, m11, m12],
      [m20, m21, m22],
    ],
  };
}

export function applyTransform(transform, pixel) {
  if (!transform) {
    return null;
  }

  if (transform.type === 'similarity') {
    return applySimilarity(transform, pixel);
  }
  if (transform.type === 'affine') {
    return applyAffine(transform, pixel);
  }
  if (transform.type === 'homography') {
    return applyHomography(transform, pixel);
  }
  throw new Error(`Unsupported transform type: ${transform.type}`);
}

export function applyInverseTransform(transform, vector) {
  if (!transform) {
    return null;
  }

  if (transform.type === 'similarity') {
    return applySimilarity(invertSimilarity(transform), vector);
  }
  if (transform.type === 'affine') {
    return applyAffine(invertAffine(transform), vector);
  }
  if (transform.type === 'homography') {
    const inverse = invertHomography(transform);
    return applyHomography(inverse, vector);
  }
  throw new Error(`Unsupported transform type: ${transform.type}`);
}

export function jacobianForTransform(transform, pixel) {
  if (transform.type === 'similarity') {
    const { scale, cos, sin } = transform;
    return [
      [scale * cos, -scale * sin],
      [scale * sin, scale * cos],
    ];
  }

  if (transform.type === 'affine') {
    const [[a, b], [d, e]] = transform.matrix;
    return [
      [a, b],
      [d, e],
    ];
  }

  if (transform.type === 'homography') {
    const [[h11, h12, h13], [h21, h22, h23], [h31, h32, h33]] = transform.matrix;
    const den = h31 * pixel.x + h32 * pixel.y + h33;
    if (Math.abs(den) < TOLERANCE) {
      return null;
    }
    const xNum = h11 * pixel.x + h12 * pixel.y + h13;
    const yNum = h21 * pixel.x + h22 * pixel.y + h23;
    const denSq = den * den;

    const dxdx = (h11 * den - xNum * h31) / denSq;
    const dxdy = (h12 * den - xNum * h32) / denSq;
    const dydx = (h21 * den - yNum * h31) / denSq;
    const dydy = (h22 * den - yNum * h32) / denSq;

    return [
      [dxdx, dxdy],
      [dydx, dydy],
    ];
  }

  return null;
}

export function averageScaleFromJacobian(jacobian) {
  if (!jacobian) {
    return null;
  }
  const [row1, row2] = jacobian;
  const norm1 = Math.hypot(row1[0], row1[1]);
  const norm2 = Math.hypot(row2[0], row2[1]);
  return Math.sqrt((norm1 * norm1 + norm2 * norm2) / 2);
}

const api = {
  TOLERANCE,
  fitSimilarity,
  fitAffine,
  fitHomography,
  applyTransform,
  applyInverseTransform,
  jacobianForTransform,
  averageScaleFromJacobian,
  invertSimilarity,
  invertAffine,
  invertHomography,
};

export default api;

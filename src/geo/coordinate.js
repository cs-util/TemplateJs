const EARTH_RADIUS_METERS = 6378137;

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function radToDeg(radians) {
  return (radians * 180) / Math.PI;
}

function computeOrigin(pairs) {
  if (!pairs || pairs.length === 0) {
    throw new Error('At least one coordinate is required to compute an origin');
  }

  const { totalLat, totalLon } = pairs.reduce(
    (acc, pair) => ({
      totalLat: acc.totalLat + pair.wgs84.lat,
      totalLon: acc.totalLon + pair.wgs84.lon,
    }),
    { totalLat: 0, totalLon: 0 },
  );

  return {
    lat: totalLat / pairs.length,
    lon: totalLon / pairs.length,
  };
}

function wgs84ToEnu(position, origin) {
  if (!origin) {
    throw new Error('Origin is required to convert to ENU');
  }

  const latRad = degToRad(position.lat);
  const lonRad = degToRad(position.lon);
  const originLatRad = degToRad(origin.lat);
  const originLonRad = degToRad(origin.lon);

  const cosLat = Math.cos(originLatRad);

  const east = EARTH_RADIUS_METERS * cosLat * (lonRad - originLonRad);
  const north = EARTH_RADIUS_METERS * (latRad - originLatRad);

  return { x: east, y: north };
}

function enuToWgs84(vector, origin) {
  if (!origin) {
    throw new Error('Origin is required to convert from ENU');
  }

  const originLatRad = degToRad(origin.lat);
  const lat = origin.lat + radToDeg(vector.y / EARTH_RADIUS_METERS);
  const lon = origin.lon + radToDeg(vector.x / (EARTH_RADIUS_METERS * Math.cos(originLatRad)));

  return { lat, lon };
}

const api = {
  EARTH_RADIUS_METERS,
  degToRad,
  radToDeg,
  computeOrigin,
  wgs84ToEnu,
  enuToWgs84,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = api;
}

if (typeof window !== 'undefined') {
  window.Snap2Map = window.Snap2Map || {};
  window.Snap2Map.coordinate = api;
}

import {
  EARTH_RADIUS_METERS,
  degToRad,
  radToDeg,
  computeOrigin,
  wgs84ToEnu,
  enuToWgs84,
} from './coordinate.js';

describe('coordinate utilities', () => {
  test('degToRad and radToDeg are inverses', () => {
    const degrees = 123.456;
    const radians = degToRad(degrees);
    expect(radToDeg(radians)).toBeCloseTo(degrees);
  });

  test('computeOrigin averages coordinates', () => {
    const pairs = [
      { wgs84: { lat: 40, lon: -105 } },
      { wgs84: { lat: 41, lon: -104 } },
      { wgs84: { lat: 39, lon: -106 } },
    ];
    const origin = computeOrigin(pairs);
    expect(origin.lat).toBeCloseTo(40);
    expect(origin.lon).toBeCloseTo(-105);
  });

  test('wgs84ToEnu and enuToWgs84 round trip', () => {
    const origin = { lat: 40.015, lon: -105.27 };
    const point = { lat: 40.02, lon: -105.26 };
    const enu = wgs84ToEnu(point, origin);
    expect(enu.x).toBeCloseTo(EARTH_RADIUS_METERS * Math.cos(degToRad(origin.lat)) * degToRad(0.01), 3);
    expect(enu.y).toBeCloseTo(EARTH_RADIUS_METERS * degToRad(0.005), 3);
    const roundTrip = enuToWgs84(enu, origin);
    expect(roundTrip.lat).toBeCloseTo(point.lat, 5);
    expect(roundTrip.lon).toBeCloseTo(point.lon, 5);
  });

  test('computeOrigin throws on empty input', () => {
    expect(() => computeOrigin([])).toThrow('At least one coordinate is required to compute an origin');
  });

  test('conversions require origin', () => {
    expect(() => wgs84ToEnu({ lat: 0, lon: 0 })).toThrow('Origin is required to convert to ENU');
    expect(() => enuToWgs84({ x: 0, y: 0 })).toThrow('Origin is required to convert from ENU');
  });
});

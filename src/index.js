/* istanbul ignore file */
/* global L */
import {
  calibrateMap,
  computeAccuracyRing,
  projectLocationToPixel,
  accuracyRingRadiusPixels,
} from 'snap2map/calibrator';

const state = {
  imageDataUrl: null,
  imageSize: null,
  pairs: [],
  calibration: null,
  activePair: null,
  photoMap: null,
  photoOverlay: null,
  photoPairMarkers: [],
  photoActiveMarker: null,
  osmMap: null,
  osmPairMarkers: [],
  osmActiveMarker: null,
  userMarker: null,
  accuracyCircle: null,
  geoWatchId: null,
  lastPosition: null,
  lastGpsUpdate: null,
};

const dom = {};

function $(id) {
  return document.getElementById(id);
}

function formatLatLon(value, positive, negative) {
  const direction = value >= 0 ? positive : negative;
  return `${value.toFixed(6)}° ${direction}`;
}

function updateStatusText() {
  if (!dom.calibrationStatus) {
    return;
  }
  if (!state.calibration || state.calibration.status !== 'ok') {
    dom.calibrationStatus.textContent = 'Add at least two reference pairs to calibrate the photo.';
    dom.calibrationBadge.textContent = 'No calibration';
    dom.calibrationBadge.className = 'px-2 py-1 rounded text-xs font-semibold bg-gray-200 text-gray-700';
    dom.residualSummary.textContent = '';
    dom.accuracyDetails.textContent = '';
    return;
  }

    const { kind, quality, statusMessage } = state.calibration;
  dom.calibrationStatus.textContent = statusMessage.message;
  dom.calibrationBadge.textContent = kind.toUpperCase();
  const badgeColor = kind === 'homography' ? 'bg-emerald-200 text-emerald-800' : kind === 'affine' ? 'bg-yellow-200 text-yellow-800' : 'bg-orange-200 text-orange-800';
  dom.calibrationBadge.className = `px-2 py-1 rounded text-xs font-semibold ${badgeColor}`;
  dom.residualSummary.textContent = `RMSE ${quality.rmse.toFixed(2)} m · Max residual ${quality.maxResidual.toFixed(2)} m`;

  if (state.lastPosition) {
      const ring = computeAccuracyRing(state.calibration, state.lastPosition.coords.accuracy || 50);
    if (ring) {
      dom.accuracyDetails.textContent = `Combined accuracy ${ring.sigmaTotal.toFixed(1)} m (GPS ${ring.sigmaGps.toFixed(1)} m, Map ${ring.sigmaMap.toFixed(1)} m)`;
    }
  } else {
    dom.accuracyDetails.textContent = '';
  }
}

function clearMarkers(markers) {
  markers.forEach((marker) => marker.remove());
  return [];
}

function refreshPairMarkers() {
  if (!state.photoMap || !state.osmMap) {
    return;
  }

  state.photoPairMarkers = clearMarkers(state.photoPairMarkers);
  state.osmPairMarkers = clearMarkers(state.osmPairMarkers);

  state.pairs.forEach((pair, index) => {
    const residual = state.calibration && state.calibration.residuals ? state.calibration.residuals[index] : null;
    const inlier = state.calibration && state.calibration.inliers ? state.calibration.inliers[index] : false;
    const color = !state.calibration ? '#2563eb' : inlier ? '#16a34a' : '#dc2626';
    const label = residual !== null && residual !== undefined ? `${residual.toFixed(1)} m` : '—';

    const photoMarker = L.circleMarker([pair.pixel.y, pair.pixel.x], {
      radius: 6,
      color,
      weight: 2,
      fillOpacity: 0.1,
    }).bindTooltip(`Pair ${index + 1}: ${label}`);
    photoMarker.addTo(state.photoMap);
    state.photoPairMarkers.push(photoMarker);

    const osmMarker = L.circleMarker([pair.wgs84.lat, pair.wgs84.lon], {
      radius: 6,
      color,
      weight: 2,
      fillOpacity: 0.1,
    }).bindTooltip(`Pair ${index + 1}: ${label}`);
    osmMarker.addTo(state.osmMap);
    state.osmPairMarkers.push(osmMarker);
  });
}

function renderPairList() {
  if (!dom.pairTableBody) {
    return;
  }
  dom.pairTableBody.innerHTML = '';

  state.pairs.forEach((pair, index) => {
    const row = document.createElement('tr');
    row.className = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
    const residual = state.calibration && state.calibration.residuals ? state.calibration.residuals[index] : null;
    const inlier = state.calibration && state.calibration.inliers ? state.calibration.inliers[index] : false;
    const indicatorClass = !state.calibration ? 'bg-blue-500' : inlier ? 'bg-green-500' : 'bg-red-500';
    const indicator = `<span class="inline-block w-2 h-2 rounded-full ${indicatorClass}"></span>`;

    row.innerHTML = `
      <td class="px-3 py-2 text-sm text-gray-700 space-x-2">${indicator}<span>${pair.pixel.x.toFixed(1)}, ${pair.pixel.y.toFixed(1)}</span></td>
      <td class="px-3 py-2 text-sm text-gray-700">${formatLatLon(pair.wgs84.lat, 'N', 'S')} · ${formatLatLon(pair.wgs84.lon, 'E', 'W')}</td>
      <td class="px-3 py-2 text-sm text-gray-700">${residual !== null && residual !== undefined ? `${residual.toFixed(1)} m` : '—'}</td>
      <td class="px-3 py-2 text-right">
        <button class="text-sm text-red-600 hover:underline" data-action="delete" data-index="${index}">Remove</button>
      </td>`;

    dom.pairTableBody.appendChild(row);
  });
}

function stopGeolocationWatch() {
  if (state.geoWatchId && navigator.geolocation) {
    navigator.geolocation.clearWatch(state.geoWatchId);
    state.geoWatchId = null;
  }
}

function updateGpsStatus(message, isError) {
  if (!dom.gpsStatus) {
    return;
  }
  dom.gpsStatus.textContent = message;
  dom.gpsStatus.className = isError ? 'text-sm text-red-600' : 'text-sm text-slate-600';
}

function updateLivePosition() {
  if (!state.photoMap || !state.calibration || state.calibration.status !== 'ok' || !state.lastPosition) {
    return;
  }

  const coords = state.lastPosition.coords;
  const location = { lat: coords.latitude, lon: coords.longitude };
  const pixel = projectLocationToPixel(state.calibration, location);
  if (!pixel) {
    return;
  }
  const latlng = L.latLng(pixel.y, pixel.x);

  function ensureUserMarker(latlngLocal) {
    if (!state.userMarker) {
      state.userMarker = L.circleMarker(latlngLocal, {
        radius: 6,
        color: '#2563eb',
        fillColor: '#2563eb',
        fillOpacity: 0.9,
      }).addTo(state.photoMap);
    } else {
      state.userMarker.setLatLng(latlngLocal);
    }
  }

  function updateAccuracyCircle(latlngLocal, ring) {
    if (!ring || !ring.pixelRadius) {
      return;
    }
    if (!state.accuracyCircle) {
      state.accuracyCircle = L.circle(latlngLocal, {
        radius: ring.pixelRadius,
        color: ring.color,
        weight: 1,
        fillColor: ring.color,
        fillOpacity: 0.15,
      }).addTo(state.photoMap);
    } else {
      state.accuracyCircle.setLatLng(latlngLocal);
      state.accuracyCircle.setRadius(ring.pixelRadius);
      state.accuracyCircle.setStyle({ color: ring.color, fillColor: ring.color });
    }
  }

  ensureUserMarker(latlng);

  const ring = accuracyRingRadiusPixels(state.calibration, location, coords.accuracy || 50);
  updateAccuracyCircle(latlng, ring);

  if (dom.accuracyDetails && ring) {
    dom.accuracyDetails.textContent = `Combined accuracy ${ring.sigmaTotal.toFixed(1)} m (GPS ${ring.sigmaGps.toFixed(1)} m, Map ${ring.sigmaMap.toFixed(1)} m)`;
  }
}

function startGeolocationWatch() {
  if (!navigator.geolocation) {
    updateGpsStatus('Geolocation is not available on this device.', true);
    return;
  }
  if (state.geoWatchId) {
    return;
  }

  updateGpsStatus('Waiting for location fix…', false);

  state.geoWatchId = navigator.geolocation.watchPosition(
    (position) => {
      state.lastPosition = position;
      state.lastGpsUpdate = Date.now();
      updateGpsStatus(`Live position · accuracy ±${Math.round(position.coords.accuracy)} m`, false);
      updateLivePosition();
      updateStatusText();
    },
    (error) => {
      updateGpsStatus(`Location error: ${error.message}`, true);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 5000,
      timeout: 3000,
    },
  );
}

function clearActivePairMarkers() {
  if (state.photoActiveMarker) {
    state.photoActiveMarker.remove();
    state.photoActiveMarker = null;
  }
  if (state.osmActiveMarker) {
    state.osmActiveMarker.remove();
    state.osmActiveMarker = null;
  }
}

function updatePairStatus() {
  if (!dom.pairStatus) {
    return;
  }
  if (!state.activePair) {
    dom.pairStatus.textContent = 'Tap “Start pair” and select a pixel on the photo followed by its real-world location on the map.';
    dom.confirmPairButton.disabled = true;
    dom.cancelPairButton.disabled = true;
    return;
  }

  const hasPixel = Boolean(state.activePair.pixel);
  const hasWorld = Boolean(state.activePair.wgs84);
  dom.cancelPairButton.disabled = false;
  dom.confirmPairButton.disabled = !(hasPixel && hasWorld);

  if (!hasPixel && !hasWorld) {
    dom.pairStatus.textContent = 'Pair # step 1/2 — Tap the photo to drop the pixel anchor.';
  } else if (hasPixel && !hasWorld) {
    dom.pairStatus.textContent = 'Pair step 2/2 — Tap the OpenStreetMap view or use your current position.';
  } else {
    dom.pairStatus.textContent = 'Pair ready — confirm to store it or tap cancel to discard.';
  }
}

function beginPairMode() {
  state.activePair = { pixel: null, wgs84: null };
  clearActivePairMarkers();
  updatePairStatus();
  dom.addPairButton.disabled = true;
}

function cancelPairMode() {
  state.activePair = null;
  clearActivePairMarkers();
  updatePairStatus();
  dom.addPairButton.disabled = false;
}

function confirmPair() {
  if (!state.activePair || !state.activePair.pixel || !state.activePair.wgs84) {
    return;
  }
  state.pairs.push({
    pixel: state.activePair.pixel,
    wgs84: state.activePair.wgs84,
  });
  cancelPairMode();
  renderPairList();
  refreshPairMarkers();
  recalculateCalibration();
}

function onPairTableClick(event) {
  const target = event.target;
  if (target.dataset.action === 'delete') {
    const index = Number.parseInt(target.dataset.index, 10);
    state.pairs.splice(index, 1);
    renderPairList();
    refreshPairMarkers();
    recalculateCalibration();
    cancelPairMode();
  }
}

function handlePhotoClick(event) {
  if (!state.activePair) {
    return;
  }
  const pixel = { x: event.latlng.lng, y: event.latlng.lat };
  state.activePair.pixel = pixel;
  if (state.photoActiveMarker) {
    state.photoActiveMarker.setLatLng(event.latlng);
  } else {
    state.photoActiveMarker = L.marker(event.latlng, { draggable: false }).addTo(state.photoMap);
  }
  updatePairStatus();
}

function handleOsmClick(event) {
  if (!state.activePair) {
    return;
  }
  const wgs84 = { lat: event.latlng.lat, lon: event.latlng.lng };
  state.activePair.wgs84 = wgs84;
  if (state.osmActiveMarker) {
    state.osmActiveMarker.setLatLng(event.latlng);
  } else {
    state.osmActiveMarker = L.marker(event.latlng, { draggable: false }).addTo(state.osmMap);
  }
  updatePairStatus();
}

function useCurrentPositionForPair() {
  if (!state.activePair) {
    return;
  }
  if (!navigator.geolocation) {
    updateGpsStatus('Geolocation is not available.', true);
    return;
  }
  updateGpsStatus('Acquiring GPS fix for reference pair…', false);
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      updateGpsStatus(`Captured reference with accuracy ±${Math.round(accuracy)} m`, false);
      const latlng = L.latLng(latitude, longitude);
      state.activePair.wgs84 = { lat: latitude, lon: longitude };
      if (state.osmActiveMarker) {
        state.osmActiveMarker.setLatLng(latlng);
      } else {
        state.osmActiveMarker = L.marker(latlng, { draggable: false }).addTo(state.osmMap);
      }
      state.osmMap.setView(latlng, Math.max(state.osmMap.getZoom(), 15));
      updatePairStatus();
    },
    (error) => {
      updateGpsStatus(`Location error: ${error.message}`, true);
    },
    {
      enableHighAccuracy: true,
      timeout: 30000,
    },
  );
}

function recalculateCalibration() {
  if (state.pairs.length < 2) {
    state.calibration = null;
    refreshPairMarkers();
    updateStatusText();
    stopGeolocationWatch();
    return;
  }

  const result = calibrateMap(state.pairs);
  state.calibration = result.status === 'ok' ? result : null;

  if (!state.calibration) {
    updateGpsStatus(result.message || 'Calibration failed. Add more pairs.', true);
    state.userMarker = null;
    if (state.accuracyCircle) {
      state.accuracyCircle.remove();
      state.accuracyCircle = null;
    }
  } else {
    updateGpsStatus('Calibration ready. Live mode active.', false);
    startGeolocationWatch();
  }

  renderPairList();
  refreshPairMarkers();
  updateStatusText();
  updateLivePosition();
}

function loadPhotoMap(dataUrl, width, height) {
  if (!state.photoMap) {
    state.photoMap = L.map('photoMap', {
      crs: L.CRS.Simple,
      zoomControl: true,
      maxZoom: 4,
      minZoom: -4,
    });
    state.photoMap.on('click', handlePhotoClick);
  }

  const bounds = [
    [0, 0],
    [height, width],
  ];

  if (state.photoOverlay) {
    state.photoOverlay.remove();
  }

  state.photoOverlay = L.imageOverlay(dataUrl, bounds).addTo(state.photoMap);
  state.photoMap.setMaxBounds(bounds);
  state.photoMap.fitBounds(bounds);

  state.imageDataUrl = dataUrl;
  state.imageSize = { width, height };
  state.pairs = [];
  state.calibration = null;
  state.lastPosition = null;
  state.userMarker = null;
  if (state.accuracyCircle) {
    state.accuracyCircle.remove();
    state.accuracyCircle = null;
  }
  clearMarkers(state.photoPairMarkers);
  clearMarkers(state.osmPairMarkers);
  cancelPairMode();
  renderPairList();
  refreshPairMarkers();
  updateStatusText();
  updateGpsStatus('Photo loaded. Add reference pairs to calibrate.', false);
}

function handleImageImport(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      loadPhotoMap(reader.result, img.width, img.height);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function setupMaps() {
  state.osmMap = L.map('osmMap', {
    zoomControl: true,
  }).setView([39.7392, -104.9903], 11);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(state.osmMap);

  state.osmMap.on('click', handleOsmClick);
}

function setActiveView(view) {
  if (view === 'photo') {
    dom.photoView.classList.remove('hidden');
    dom.osmView.classList.add('hidden');
    dom.photoTabButton.classList.add('bg-blue-600', 'text-white');
    dom.photoTabButton.classList.remove('bg-white', 'text-blue-600');
    dom.osmTabButton.classList.remove('bg-blue-600', 'text-white');
    dom.osmTabButton.classList.add('bg-white', 'text-blue-600');
    if (state.photoMap) {
      state.photoMap.invalidateSize();
    }
  } else {
    dom.photoView.classList.add('hidden');
    dom.osmView.classList.remove('hidden');
    dom.osmTabButton.classList.add('bg-blue-600', 'text-white');
    dom.osmTabButton.classList.remove('bg-white', 'text-blue-600');
    dom.photoTabButton.classList.remove('bg-blue-600', 'text-white');
    dom.photoTabButton.classList.add('bg-white', 'text-blue-600');
    state.osmMap.invalidateSize();
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch((error) => {
      console.warn('Service worker registration failed', error);
    });
  }
}

function cacheDom() {
  dom.mapImageInput = $('mapImageInput');
  dom.addPairButton = $('addPairButton');
  dom.usePositionButton = $('usePositionButton');
  dom.confirmPairButton = $('confirmPairButton');
  dom.cancelPairButton = $('cancelPairButton');
  dom.pairStatus = $('pairStatus');
  dom.pairTableBody = $('pairTableBody');
  dom.calibrationStatus = $('calibrationStatus');
  dom.calibrationBadge = $('calibrationBadge');
  dom.residualSummary = $('residualSummary');
  dom.accuracyDetails = $('accuracyDetails');
  dom.gpsStatus = $('gpsStatus');
  dom.photoView = $('photoView');
  dom.osmView = $('osmView');
  dom.photoTabButton = $('photoTabButton');
  dom.osmTabButton = $('osmTabButton');
  dom.pairTable = $('pairTable');
}

function setupEventHandlers() {
  dom.mapImageInput.addEventListener('change', handleImageImport);
  dom.addPairButton.addEventListener('click', beginPairMode);
  dom.cancelPairButton.addEventListener('click', cancelPairMode);
  dom.confirmPairButton.addEventListener('click', confirmPair);
  dom.usePositionButton.addEventListener('click', useCurrentPositionForPair);
  dom.pairTableBody.addEventListener('click', onPairTableClick);
  dom.photoTabButton.addEventListener('click', () => setActiveView('photo'));
  dom.osmTabButton.addEventListener('click', () => setActiveView('osm'));
}

function init() {
  cacheDom();
  setupEventHandlers();
  setupMaps();
  setActiveView('photo');
  updateStatusText();
  updateGpsStatus('Import a map photo to get started.', false);
  registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', init);

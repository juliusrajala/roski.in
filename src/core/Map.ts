import * as MapBox from 'mapbox-gl';

export function createMapElement(containerEl: HTMLElement, options: MapBox.MapboxOptions = {}) {
  // Silly hack to dance around mapbox-gl typings.
  (MapBox as any).accessToken = MAPBOX_TOKEN;

  const map = new MapBox.Map({
    container: containerEl,
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [24.944482, 60.167763 ], // Start by centering to Helsinki
    zoom: 12,
    ...options,
  })

  registerClickListeners(map);
  registerTouchListeners(map);

  return map;
}

function registerClickListeners(map: MapBox.Map) {
  map.on('click', event => {
    console.log('Clicked', event);
  })

  map.on('dblclick', event => {
    console.log('Double-clicked', event);
  })
}

function registerTouchListeners(map: MapBox.Map) {
  map.on('touch', (event) => {
    console.log('Touched', event);
  })
}

export function getGeoLocation() {
  // Mock location to Helsinki
  return { lat: 60.167763, lng: 24.944482 };
}

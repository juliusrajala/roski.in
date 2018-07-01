import * as MapBox from 'mapbox-gl';

export function createMapElement(containerEl: HTMLElement, options: MapBox.MapboxOptions = {}) {
  // Silly hack to dance around mapbox-gl typings.
  (MapBox as any).accessToken = MAPBOX_TOKEN;

  const map = new MapBox.Map({
    container: containerEl,
    style: 'mapbox://styles/mapbox/light-v9',
    center: [24.944482, 60.167763 ], // Start by centering to Helsinki
    zoom: 12,
    ...options,
  })

  registerClickListeners(map);

  return map;
}

function registerClickListeners(map: MapBox.Map) {
  map.doubleClickZoom.disable();
  map.on('click', event => {
    console.log('Clicked', event);
  })

  map.on('dblclick', event => {
    event.preventDefault();
    console.log('Double-clicked', event);
  })
}


export function getUserLocation() {
  // Mock location to Helsinki
  return { lat: 60.167763, lng: 24.944482 };
}

import * as MapBox from 'mapbox-gl';


export function createMapElement(containerEl: HTMLElement, options: MapBox.MapboxOptions = {}) {
  // Silly hack to dance around mapbox-gl typings.
  (MapBox as any).accessToken = MAPBOX_TOKEN;

  return new MapBox.Map({
    container: containerEl,
    style: 'mapbox://styles/mapbox/dark-v9',
    ...options,
  })
}

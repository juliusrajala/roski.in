export type MarkerType =
  | 'Trash bin'
  | 'Recycling spot'
  | 'Dog Waste bin';

export type LatLng = {
  lat: number,
  lng: number,
};

export interface IBinMarker {
  location: LatLng;
  label: string;
  description: string;
  markerType: MarkerType;
}
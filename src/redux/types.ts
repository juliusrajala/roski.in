import { IBinMarker } from "src/core/types";


type Action =
  | 'map.PUSH_MARKER'
  | 'map.NEW_MARKER';

export interface IMapState {
  markers: IBinMarker [];
}

export interface IRdxAction {
  type: Action;
  payload: any;
}
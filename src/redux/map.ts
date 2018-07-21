import { IMapState, IRdxAction } from "src/redux/types";

export default (state: IMapState, action: IRdxAction) => {
  const { type, payload } = action;
  switch(type) {
    case 'map.NEW_MARKER':
    case 'map.PUSH_MARKER':
    default: return state;
  }
}

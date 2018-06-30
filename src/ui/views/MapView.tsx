import * as React from 'react';
import styled from 'styled-components';
import { createMapElement } from 'src/core/Map';
import * as MapBox from 'mapbox-gl';

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  > div {
    flex: 1;
    height: 100%;
    width: 100%;
  }
`;

const ErrorMessage = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: red;
`;

interface MapProps {};
interface MapState {
  caughtError: boolean;
  errorMessage?: string;
  initialFocus?: any;
};

class MapView extends React.Component<MapProps, MapState> {
  map: MapBox.Map;
  mapContainer: HTMLElement;

  constructor(props) {
    super(props);
    this.state = {
      caughtError: false,
    }
  }

  componentDidMount() {
    const map = createMapElement(this.mapContainer)

    this.map = map;
  }

  componentWillUnmount() {
    if (!this.map) return;

    this.map.remove();
  }

  componentDidCatch(err) {
    this.setState({
      caughtError: true,
      errorMessage: err.toString(),
    });
  }

  render() {
    const { children } = this.props;
    const { caughtError, errorMessage } = this.state;

    if (caughtError) {
      return (
        <MapContainer>
          { children }
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </MapContainer>
      )
    }
    return (
      <MapContainer>
        <div ref={(el: HTMLElement) => this.mapContainer = el}>
          {children}
        </div>
      </MapContainer>
    )
  }
}

export default MapView;
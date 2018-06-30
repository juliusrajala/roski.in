import * as React from 'react';
import produce from 'immer';
import styled from 'styled-components';

const Container = styled.section`
  background: url(assets/images/trianglify.svg) no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

interface ConfigState {
  drawerOpen: boolean;
  authenticated: boolean;
  toggleDrawer: (Event) => void;
}

export const ConfigContext: React.Context<ConfigState> = React.createContext({
  drawerOpen: false,
  authenticated: false,
  toggleDrawer: (event: Event) => { },
});

class ConfigProvider extends React.Component<any, ConfigState> {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      authenticated: false,
      toggleDrawer: this.toggleDrawer,
    }
  }

  toggleDrawer = (event) => {
    event.preventDefault();
    const newState = produce(draft => {
      draft.drawerOpen = !this.state.drawerOpen;
    })

    this.setState(newState)
  }

  render() {
    return (
      <ConfigContext.Provider value={this.state}>
        <Container>{this.props.children}</Container>
      </ConfigContext.Provider>
    )
  }
}

export default ConfigProvider;
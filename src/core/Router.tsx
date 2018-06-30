import * as React from 'react';
import * as regexp from 'path-to-regexp';
import * as history from 'browser-history';
import produce from 'immer';
import { Container, StyledLink } from 'src/ui/styles';

type RouterState = {
  url: string;
}

type RouterActions = {
  goTo: (string) => void;
}

type RouterContext = {
  state: RouterState;
  action: RouterActions;
}

const Context = React.createContext({state: {}, action: {}});
const { Provider, Consumer } = Context;
const initialState = { url: '' };

class Router extends React.Component<any, RouterState> {
  state: RouterState = produce(
    initialState, draft => { draft.url = window.location.pathname }
  );

  action = {
    goTo: (url) => this.setState(
      state => setUrl(state, url),
      () => history(url),
    )
  }

  componentDidMount() {
    history((e, url) => this.setState(
      state => setUrl(state, url)
    ))
  }

  render() {
    const { props } = this;
    console.log('action', this.action);
    return (
      <Provider value={{ state: this.state, action: this.action }}>
        {props.children}
      </Provider>
    );
  }
}

export const Route = (props: any) => (
    <Consumer>
      {({state, action}: RouterContext) => {
        console.log('RouteContext is', state);
        let keys = [];
        const re = regexp(props.path, keys)
        console.log(re, keys);
        if (re.test(state.url)) return (
          <Container>
            <props.component { ...props } />
          </Container>
        )
      }}
    </Consumer>
);

export const AppLink = (props: any) => {
  const { path, children, ...rest } = props;
  return (
    <Consumer>
      {({state, action}: RouterContext) => (
        <StyledLink { ...rest } onClick={() => {
          console.log(state, action);
          return action.goTo(path);
        }}>
          {children}
        </StyledLink>
      )}
    </Consumer>
  )
}

function setUrl(state: RouterState, url: string) {
  return produce(state, draft => { draft.url = url });
}

export default Router;

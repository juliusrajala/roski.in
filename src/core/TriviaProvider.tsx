import * as React from 'react';
import produce from 'immer';

interface Trivia {
  text: string;
  author: string;
  id: string;
  score: number;
  reviewed: boolean;
  reviewer: string;
}

interface Error {
  targetId: string;
  message: string;
  time: number;
}

interface TriviaState {
  fetched: String [];
  trivia: Trivia [];
  errors: Error [];
}

interface TriviaActions {
  fetchTrivia: (string?) => void;
}

const initialState: TriviaState = {
  fetched: [],
  trivia: [],
  errors: [],
};

const Context = React.createContext({ state: {}, actions: {} });
const { Provider, Consumer } = Context;

function mockTriviaFetch(id): Promise<Trivia> {
  return Promise.resolve({
      text: 'Something',
      score: 50,
      reviewed: true,
      reviewer: 'Julius',
      author: 'Matti',
      id,
    })
}

function fetchTrivia(id, state: TriviaState) {
  return mockTriviaFetch(id)
    .then((trivia) => produce(state, draft => {
      draft.trivia.push(trivia);
      draft.fetched.push(trivia.id);
    }));
}

class TriviaProvider extends React.Component<any, TriviaState> {
  state = initialState;
  actions = {
    fetchTrivia: (id) => fetchTrivia(id, this.state)
      .then(nextState => this.setState(nextState))
  }

  render () {
    console.log('TriviaProvider gets mounted');
    return (
      <Provider value={{ state: this.state, actions: this.actions }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default TriviaProvider;

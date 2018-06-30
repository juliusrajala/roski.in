import * as React from 'react';
import produce from 'immer';
import { Card, CardTitle, Button, AlignRight } from 'src/ui/styles';
import styled from 'styled-components';

const TextField = styled.input`
  border: none;
  padding: 20px;
  border-radius: 3px;
  font-size: 1.2rem;
  background-color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  margin: 10px;

  :focus {
    outline: none;
  }
`;

class CreateView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trivia: '',
    }
  }

  setText(event) {
    event.preventDefault();
    const targetValue = event.target.value;
    const newState = produce(draft => {
      draft.trivia = targetValue;
    });

    this.setState(newState);
  }

  render(){
    return (
      <Card>
        <CardTitle>Write down your trivia</CardTitle>
        <TextField onChange={event => this.setText(event)} />
        <AlignRight>
          <Button>Submit</Button>
        </AlignRight>
      </Card>
    );
  }
}

export default CreateView;
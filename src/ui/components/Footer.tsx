import * as React from 'react';
import { Bar, CardTitle } from 'src/ui/styles';
import styled from 'styled-components';

const FooterBar = Bar.extend`
  background-color: #ffffff;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 2;
  > * {
    font-size: 1.3rem;
  }

  > a {
    padding: 10px 0;
    :hover {
      color: #0288d1;
    }
  }

  @media (max-width: 500px), (max-device-width: 500px) {
    > * {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: #ff9800;
  border: 3px solid #ff9800;
  border-radius: 3px;
  background: #ffffff;
  padding: 10px 20px;
  font-family: Rubik, sans-serif;
  font-weight: 600;
  transition: all .2s ease-in-out;
  cursor: pointer; 

  :hover {
    background-color: #ff9800;
    color: #ffffff;
  }
`;

const Footer = () => (
  <FooterBar>
    <CardTitle>
      <Button>New bin</Button>
    </CardTitle>
  </FooterBar>
)

export default Footer;
import * as React from 'react';
import { Bar, CardTitle } from 'src/ui/styles';

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
      color: #4CAF50;
    }
  }

  @media (max-width: 500px), (max-device-width: 500px) {
    > * {
      font-size: 1rem;
    }
  }
`;

const Footer = () => (
  <FooterBar>
    <CardTitle>Add a new bin</CardTitle>
  </FooterBar>
)

export default Footer;
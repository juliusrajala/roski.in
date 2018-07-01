import * as React from 'react';
import styled from 'styled-components';
import {
  Navi,
  IconContainer,
  Icon,
  Divider,
  BreadText
} from 'src/ui/styles';
import { ConfigContext } from 'src/core/ConfigProvider';
import { AppLink } from 'src/core/Router';

const SideDrawer = styled.section`
  position: fixed;
  height: 100vh;
  max-height: 100%;
  top: 0;
  width: 250px;
  background-color: #fff;
  z-index: 3;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 10px;
  color: #2f2f2f;
  font-family: Rubik, sans-serif;
  font-weight: 600;
  transition: .2s all ease-in-out;
  right: ${(props: any) => props.isToggled ? '0px' : '-250px'}
`;

const CloseIcon = Icon.extend`
  height: 30px;
`;

 const IconBar = styled.span`
  width: 100%;
  content: "";
  border-radius: 2px;
  height: 5px;
  transform: rotate(45deg);
  transition: all .2s ease-in-out;
  position: absolute;
  top: 0px;
  right: 0px;
  margin-top: 10px;

  :last-child {
    transform: rotate(135deg);
  }
`;

const Recognition = styled.a`
  font-size: 1rem;
  font-family: Roboto Mono, mono;
  text-decoration: none;
  color: #ff9800;
  transition: all .1s ease-in-out;
  :hover {
    color: #0288d1;
    text-decoration: underline;
  }
`;

const Drawer: React.SFC<any> = () => (
  <ConfigContext.Consumer>
    {(context) => (
      <SideDrawer isToggled={context.drawerOpen}>
        <IconContainer>
          <CloseIcon onClick={event => context.toggleDrawer(event)}>
            <IconBar />
            <IconBar />
          </CloseIcon>
        </IconContainer>
        <Navi>
          <AppLink path="/">Map & bins</AppLink>
          <AppLink path="/about">Motivation</AppLink>
          <Divider />
          <BreadText>
            Open source on <Recognition href="https://github.com/juliusrajala/roski.in" target="_blank">Github</Recognition>,
            thanks to <Recognition target="_blank" href="https://spiceprogram.org">
            the Spice Program</Recognition>.
          </BreadText>
        </Navi>
      </SideDrawer>
    ) }
  </ConfigContext.Consumer>
);

export default Drawer;

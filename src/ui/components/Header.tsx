import * as React from 'react';
import { Title, Bar, IconContainer, Icon, IconBar } from 'src/ui/styles';
import { ConfigContext } from 'src/core/ConfigProvider';
import styled from 'styled-components';

const HeaderBar = Bar.extend`
  position: fixed;
  z-index: 2;
  width: 100%;
`;

const HighLight = styled.span`
  color: #ff9800;
`;

const Header = () => (
  <ConfigContext.Consumer>
    {(context) => (
      <HeaderBar>
        <Title>ROSKI<HighLight>.IN</HighLight></Title>
        <IconContainer>
          <Icon onClick={event => context.toggleDrawer(event)}>
            <IconBar />
            <IconBar />
            <IconBar />
          </Icon>
        </IconContainer>
      </HeaderBar>
    ) }
  </ConfigContext.Consumer>
);

export default Header;
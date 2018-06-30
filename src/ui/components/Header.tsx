import * as React from 'react';
import { Title, Bar, IconContainer, Icon, IconBar } from 'src/ui/styles';
import { ConfigContext } from 'src/core/ConfigProvider';

const HeaderBar = Bar.extend`
  position: fixed;
  z-index: 2;
  width: 100%;
`;

const Header = () => (
  <ConfigContext.Consumer>
    {(context) => (
      <HeaderBar>
        <Title>Roski.in</Title>
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
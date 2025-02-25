import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const MainHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Studio">
        <div className="HeaderMenuButton" />
        <SkipToContent />
        <HeaderName element={Link} to="/" prefix="DesignThinkBuild">
          Studio
        </HeaderName>
        <HeaderNavigation aria-label="Studio">
          <HeaderMenuItem element={Link} to="/products">
            Products
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/journeys">
            Journeys
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/features">
            Features
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/products">
                Products
              </HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/features">
                Features
              </HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/journeys">
                Journeys
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default MainHeader;

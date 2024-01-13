// Navbar.tsx
import React from 'react';
import styled from 'styled-components';
import svgLogo from '../static/images/logo.svg';
import { Theme, UserInfoProps } from '../types/types';
import UserInfo from './UserInfo';
import AnimatedThemeToggle from './ThemeToggler';

const PMSNavbar = styled.div<{ theme: Theme }>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: large;
  justify-content: space-between;
`;

const PMSNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AppLogo = styled.img`
  margin-right: 10px;
`;

const EventsIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 15px;
`;

const Navbar: React.FC<UserInfoProps> = ({
  username,
  showProfileTray,
  toggleProfileTray,
  handleLogout,
  theme,
  currentTheme,
  handleThemeChange,
}) => {
  return (
    <PMSNavbar>
      <PMSNav theme={theme}>
        <AppLogo src={svgLogo} alt='pmg-logo' height={50} />
        <h3>Portfolio Management System</h3>
      </PMSNav>
      <EventsIcon>
        <EventsIcon>
          <AnimatedThemeToggle
            currentTheme={currentTheme}
            onClick={handleThemeChange}
            isNavbar={true}
          />
        </EventsIcon>
        <UserInfo
          username={username}
          showProfileTray={showProfileTray}
          toggleProfileTray={toggleProfileTray}
          handleLogout={handleLogout}
          theme={theme}
          currentTheme={currentTheme}
          handleThemeChange={handleThemeChange}
        />
      </EventsIcon>
    </PMSNavbar>
  );
};

export default Navbar;

// Navbar.tsx
import React from 'react';
import styled from 'styled-components';
import svgLogo from '../static/images/logo.svg';
import { UserInfoProps } from '../types/types';
import UserInfo from './UserInfo';

const PMSNavbar = styled.div`
  // background-color: #333;
  color: white;
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

const Navbar: React.FC<UserInfoProps> = ({
  username,
  showProfileTray,
  toggleProfileTray,
  handleLogout,
  handleLogin,
}) => {
  return (
    <PMSNavbar>
      <PMSNav>
        <AppLogo src={svgLogo} alt='pmg-logo' height={50} />
        <h3>Portfolio Management System</h3>
      </PMSNav>
      <UserInfo
        username={username}
        showProfileTray={showProfileTray}
        toggleProfileTray={toggleProfileTray}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
    </PMSNavbar>
  );
};

export default Navbar;

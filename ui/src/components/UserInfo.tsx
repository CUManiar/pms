// UserInfo.tsx
import React from 'react';
import styled from 'styled-components';
import { Theme, UserInfoProps } from '../types/types';
import InitialLetterIcon from './InitialLetterIcon';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative; /* Make the container a positioning context for absolute positioning */
`;

const UserActions = styled.div`
  cursor: pointer;
`;

const ProfileTray = styled.div<{ show: boolean; theme: Theme }>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.background};
  color: #ccc;
  box-shadow: 1px 1px 5px ${(props) => props.theme.textColor};
  z-index: 1;
  width: 200px;
  border-radius: 5px;
  overflow: hidden;
  font-size: 14px;
  margin-top: 10px;

  &[show] {
    display: flex;
  }
`;

const TrayItem = styled.div<{ theme: Theme }>`
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${(props) => props.theme.textColor};

  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.background};
  }
`;

const UserInfo: React.FC<UserInfoProps> = ({
  username,
  showProfileTray,
  toggleProfileTray,
  handleLogout,
  theme,
}) => {
  return (
    <ProfileContainer>
      <UserActions onClick={toggleProfileTray}>
        <InitialLetterIcon name={username} />
      </UserActions>
      <ProfileTray show={showProfileTray} theme={theme}>
        <TrayItem onClick={handleLogout} theme={theme}>
          Profile
        </TrayItem>
        <TrayItem onClick={handleLogout} theme={theme}>
          Logout
        </TrayItem>
      </ProfileTray>
    </ProfileContainer>
  );
};

export default UserInfo;

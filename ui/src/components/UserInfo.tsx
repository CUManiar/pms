// UserInfo.tsx
import React from 'react';
import styled from 'styled-components';
import InitialLetterIcon from './InitialLetterIcon';
import { UserInfoProps } from '../types/types';

const ProfileContainer = styled.div`
  position: relative;
`;

const UserActions = styled.div`
  cursor: pointer;
`;

const ProfileTray = styled.div<{ show: boolean }>`
  position: absolute;
  right: 0;
  // background-color: #333;
  border: 1px solid #333;
  color: #ccc;
  box-shadow: 0 3px 12px #ccc;
  z-index: 1;
  width: 200px;
  border-radius: 6px;
  overflow: hidden;
  font-size: 14px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const TrayItem = styled.div`
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    // background-color: #f6f8fa;
  }
`;

const CursorItem = styled.div`
  cursor: pointer;
`;

const UserInfo: React.FC<UserInfoProps> = ({
  username,
  showProfileTray,
  toggleProfileTray,
  handleLogout,
  handleLogin,
}) => {
  return (
    <div className='user_info'>
      {username ? (
        <ProfileContainer>
          <UserActions onClick={toggleProfileTray}>
            <InitialLetterIcon name={username} />
          </UserActions>
          <ProfileTray show={showProfileTray}>
            <TrayItem onClick={handleLogout}>Profile</TrayItem>
            <TrayItem onClick={handleLogout}>Logout</TrayItem>
          </ProfileTray>
        </ProfileContainer>
      ) : (
        <CursorItem onClick={handleLogin}>Login</CursorItem>
      )}
    </div>
  );
};

export default UserInfo;

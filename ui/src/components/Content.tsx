// MainContent.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContentProps, SidebarProps, Theme } from '../types/types';
import InitialLetterIcon from './InitialLetterIcon';

const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SidebarContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  flex: 0 0 200px;
  padding: 20px;
  overflow-y: auto;
  opacity: 0.5;
  background-color: ${(props) => props.theme.sidebarBgColor};
  color: ${(props) => props.theme.textColor};
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  margin: 5px;
  font-size: large;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    font-weight: 600;
  }

  &.bottom {
    margin-top: auto; // Move to the bottom
  }
`;

const SidebarTitle = styled.div`
  margin: 0 10px;
`;

const ContentItem = styled.div<{ theme: Theme }>`
  padding: 20px;
  flex: 1;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
`;

// Define your Dashboard, Management, and Settings components
const DashboardPage: React.FC = () => (
  <div>
    <h1>Dashboard Page</h1>
    {/* Add your Dashboard page content here */}
  </div>
);

const ManagementPage: React.FC = () => (
  <div>
    <h1>Management Page</h1>
    {/* Add your Management page content here */}
  </div>
);

const SettingsPage: React.FC = () => (
  <div>
    <h1>Settings Page</h1>
    {/* Add your Settings page content here */}
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ theme, setActivePage }) => {
  return (
    <SidebarContainer theme={theme}>
      <SidebarItem onClick={() => setActivePage('dashboard')}>
        <InitialLetterIcon name='Dashboard' />
        <SidebarTitle> Dashboard</SidebarTitle>
      </SidebarItem>
      <SidebarItem onClick={() => setActivePage('management')}>
        <InitialLetterIcon name='Management' />
        <SidebarTitle> Management</SidebarTitle>
      </SidebarItem>
      <SidebarItem className='bottom' onClick={() => setActivePage('settings')}>
        <InitialLetterIcon name='Settings' />
        <SidebarTitle> Settings</SidebarTitle>
      </SidebarItem>
    </SidebarContainer>
  );
};
// const Content: React.FC<ContentProps> = ({ theme }) => {
//   return <ContentItem theme={theme}></ContentItem>;
// };

const MainContent: React.FC<MainContentProps> = ({ theme }) => {
  const [activePage, setActivePage] = useState<string>('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'management':
        return <ManagementPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return null;
    }
  };
  return (
    <MainContainer>
      <Sidebar theme={theme} setActivePage={setActivePage} />
      <ContentItem theme={theme}>{renderPage()}</ContentItem>;
    </MainContainer>
  );
};

export default MainContent;

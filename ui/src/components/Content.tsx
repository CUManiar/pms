// MainContent.tsx
import React from 'react';
import styled from 'styled-components';
import { ContentProps } from '../types/types';

const MainContainer = styled.div`
  display: flex;
  //   flex-direction: row;
  flex: 1;
`;

const SidebarContainer = styled.div`
  flex: 0 0 200px;
  padding: 20px;
  overflow-y: auto;
  opacity: 0.5;
`;

const SidebarItem = styled.div`
  padding: 10px 5px;
  margin: 5px;
  font-size: large;
  color: black;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    font-weight: 600;
  }
`;

const ContentItem = styled.div`
  padding: 20px;
  flex: 1;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarItem>Dashboard</SidebarItem>
      <SidebarItem>Management</SidebarItem>
      <SidebarItem>Settings</SidebarItem>
    </SidebarContainer>
  );
};

const Content: React.FC = () => {
  return <ContentItem>I'm content</ContentItem>;
};

const MainContent: React.FC<ContentProps> = ({ isLoggedIn }) => {
  return (
    <MainContainer>
      <Sidebar />
      <Content />
    </MainContainer>
  );
};

export default MainContent;

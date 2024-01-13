import { Dispatch, SetStateAction } from 'react';

// types.ts
export interface Theme {
  background: string;
  cardBackground: string;
  textColor: string;
  buttonBackground: string;
  buttonBorder: string;
  buttonColor: string;
  lightShadow: string;
  sidebarBgColor: string;
}
export interface User {
  username: string;
}

export interface CentralState {
  user: User | null;
  showProfileTray: boolean;
}

export interface InitialLetterIconProps {
  name: string;
}

export interface UserInfoProps {
  username: string;
  showProfileTray: boolean;
  toggleProfileTray: () => void;
  handleLogout: () => void;
  theme: Theme;
  currentTheme: string;
  handleThemeChange: () => void;
}

export interface MainContentProps {
  theme: Theme;
}

export interface SidebarProps {
  theme: Theme;
  setActivePage: Dispatch<SetStateAction<string>>;
}
export interface ContentProps {
  theme: Theme;
}

export interface LoginInfo {
  email: string;
  password: string;
}

// types.ts
export interface Theme {
  background: string;
  cardBackground: string;
  textColor: string;
  buttonBackground: string;
  buttonBorder: string;
  buttonColor: string;
  lightShadow: string
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
  username: string | null;
  showProfileTray: boolean;
  toggleProfileTray: () => void;
  handleLogout: () => void;
  handleLogin: () => void;
}

export interface ContentProps {
  isLoggedIn: User | boolean;
}

export interface LoginInfo {
  email: string,
  password: string
}

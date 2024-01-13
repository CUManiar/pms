import React from 'react';
import styled from 'styled-components';
import darkLogo from '../static/images/dark.svg';
import lightLogo from '../static/images/light.svg';

interface ThemeToggleProps {
  currentTheme: string;
  onClick: () => void;
  isNavbar: boolean;
}

const ToggleButton = styled.div<{ theme: string }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  color: ${(props) => (props.theme === 'light' ? '#fff' : '#000')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

const ImageContainer = styled.div<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;
`;

const ToggleImg = styled.img<{ theme: string }>`
  height: 25px;
  cursor: pointer;
  padding: 10px;
  background: ${(props) => (props.theme === 'dark' ? '#fff' : '#ddd')};
  border-radius: 50%;
`;

const AnimatedThemeToggle: React.FC<ThemeToggleProps> = ({
  currentTheme,
  onClick,
  isNavbar,
}) => {
  return isNavbar ? (
    <ImageContainer theme={currentTheme}>
      {currentTheme === 'light' ? (
        <ToggleImg
          src={darkLogo}
          alt='dark-logo'
          onClick={onClick}
          theme={currentTheme}
        />
      ) : (
        <ToggleImg
          src={lightLogo}
          alt='light-logo'
          onClick={onClick}
          theme={currentTheme}
        />
      )}
    </ImageContainer>
  ) : (
    <ToggleButton onClick={onClick} theme={currentTheme}>
      {currentTheme === 'light' ? 'D' : 'L'}
    </ToggleButton>
  );
};

export default AnimatedThemeToggle;

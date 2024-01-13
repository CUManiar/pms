import React from "react";
import styled from "styled-components";

interface ThemeToggleProps {
  currentTheme: string;
  onClick: () => void;
}

const ToggleButton = styled.div<{ theme: string; }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme === 'light' ? '#000' : '#fff'};
  color: ${(props) => props.theme === 'light' ? '#fff' : '#000'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;


  &:hover {
    background-color: ${(props) => props.theme === 'light' ? '#000' : '#fff'};
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

const AnimatedThemeToggle: React.FC<ThemeToggleProps> = ({
  currentTheme,
  onClick,
}) => {
  return (
    <ToggleButton onClick={onClick} theme={currentTheme}>
      {currentTheme === 'light' ? 'D' : 'L'}
    </ToggleButton>
  );
};

export default AnimatedThemeToggle;

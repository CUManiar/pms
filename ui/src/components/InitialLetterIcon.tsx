// InitialLetterIcon.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { InitialLetterIconProps } from '../types/types';

const generateRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const IconContainer = styled.div<{ isHovered: boolean; bgColor: string }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.isHovered ? '#555' : props.bgColor)};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  transform: rotate(${(props) => (props.isHovered ? '360deg' : '0deg')});

  &:hover {
    background-color: #555;
    transform: rotate(360deg);
  }
`;

const InitialLetterIcon: React.FC<InitialLetterIconProps> = ({ name }) => {
  const initials = name ? name.split(' ').map(i => i[0]).join('').toUpperCase() : '';

  const [isHovered, setIsHovered] = useState(false);
  const [iconBgColor, setIconBgColor] = useState(() => generateRandomColor());

  return (
    <IconContainer
      isHovered={isHovered}
      bgColor={iconBgColor}
      onMouseEnter={() => {
        setIsHovered(true);
        setIconBgColor(generateRandomColor());
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {initials}
    </IconContainer>
  );
};

export default InitialLetterIcon;

// Login.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../static/images/logo.svg';
import { ErrorSpanItem } from '../styleboards/Buttons';
import { Theme } from '../types/types';
import { TEST_EMAIL, TEST_PASSWORD } from '../utils/constants';

// Pass the theme and onThemeChange as props
interface LoginProps {
  theme: Theme;
  onThemeChange: (selectedTheme: Theme) => void;
  onLoginSuccess: (email: string) => void;
}

const LoginPage = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme.background};
`;

const LoginCard = styled.div<{ theme: Theme }>`
  background: ${(props) => props.theme.cardBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  box-shadow: 5px 5px 5px ${(props) => props.theme.lightShadow};
  box-sizing: border-box;
  border-radius: 5px;
`;

const Title = styled.h2<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  font;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input<{ theme: Theme }>`
  padding: 10px 15px;
  margin: 5px;
  line-height: 1.6;
  font-weight: 400;
  padding: 10px 15px;
  width: 100%;
`;

const Button = styled.button<{ theme: Theme }>`
  padding: 10px 25px;
  background: ${(props) => props.theme.buttonBackground};
  border: ${(props) => props.theme.buttonBorder};
  color: ${(props) => props.theme.buttonColor};
  font-size: 16px;
  font-weight: 500;
  margin: 5px auto;
  box-shadow: 1px 4px 2px ${(props) => props.theme.background}

`;

const LightSpanIcon = styled.span`
  font-size: 12px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Login: React.FC<LoginProps> = ({ theme, onThemeChange, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, password);
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      // Successful login
      localStorage.setItem('login', 'true');
      localStorage.setItem('username', 'Chirag Maniar');
      localStorage.setItem('userEmail', email);
      onLoginSuccess(email);

    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <LoginPage theme={theme}>
      <LoginCard theme={theme}>
        <img src={logo} alt='pms-logo' height={100} />
        <Title theme={theme}>Login to PMS</Title>
        <LoginForm onSubmit={handleEmailLogin}>
          <Input
            type='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit'>Login</Button>
        </LoginForm>
        <LightSpanIcon> Forgot email ID or Password?</LightSpanIcon>
        {error && <ErrorSpanItem>{error}</ErrorSpanItem>}
      </LoginCard>
    </LoginPage>
  );
};

export default Login;
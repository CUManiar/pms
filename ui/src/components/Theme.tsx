import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../types/types";
import { themes } from "../utils/themes";

// Create a styled component for the main container
const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;
`;

// Create a styled component for the login form
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.buttonBackground};
  border-radius: 8px;

  input {
    margin-bottom: 10px;
    padding: 8px;
  }

  button {
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.buttonText};
    padding: 8px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState(themes.lightTheme);

  const handleThemeChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LoginForm>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button type="submit">Login</button>
        </LoginForm>

        <div>
          <button onClick={() => handleThemeChange(themes.lightTheme)}>Light Theme</button>
          <button onClick={() => handleThemeChange(themes.darkTheme)}>Dark Theme</button>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
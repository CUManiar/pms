// App.tsx
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Login from "./components/Login";
import { Theme, User } from "./types/types";
import { themes } from "./utils/themes";
import AnimatedThemeToggle from "./components/ThemeToggler";

const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.5s, color 0.5s;
`;

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(() => {
    const isLoggedIn = localStorage.getItem("login") !== null;

    if (isLoggedIn) {
      return { username: localStorage.getItem("username") || "" };
    } else {
      return null;
    }
  });

  const [showProfileTray, setShowProfileTray] = useState(false);
  const [theme, setTheme] = useState(themes.lightTheme);
  const [themeName, setThemeName] = useState("light");

  const handleThemeChange = () => {
    // Toggle between light and dark themes
    setTheme((prevTheme) =>
      prevTheme === themes.darkTheme ? themes.lightTheme : themes.darkTheme
    );
    setThemeName((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login") !== null;

    if (isLoggedIn) {
      setUser({
        username: localStorage.getItem("username") || "",
      });
    } else {
      setUser(null);
    }
  }, []);

  const handleLogin = (email: string) => {
    console.log("From App.ts -->", email);
    // console.warn('From App.ts -->', password)
    setUser({
      username: email,
    });
    localStorage.setItem("login", "true");
    localStorage.setItem("username", email);
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("username");
    toggleProfileTray();
    setUser(null);
  };

  const toggleProfileTray = () => {
    setShowProfileTray(!showProfileTray);
  };

  const ThemeSwitchContainer = styled.div<{ theme: Theme }>`
    display: flex;
    align-self: flex-end;
    padding: 20px;
  `;


  return (
    <ThemeProvider theme={theme}>
      <Container>
        {!user && (
          <ThemeSwitchContainer>
            <AnimatedThemeToggle
              currentTheme={themeName}
              onClick={handleThemeChange}
            />
          </ThemeSwitchContainer>
        )}
        {user ? (
          <button onClick={handleLogout}>Logout </button>
        ) : (
          <Login
            theme={theme}
            onThemeChange={handleThemeChange}
            onLoginSuccess={handleLogin}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;

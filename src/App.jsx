import React, { useContext, useEffect, useState } from "react";
import MainApp from "./MainApp";
import MainApp2 from "./MainApp2";

export const ThemeContext = React.createContext();
export const ToggleThemeContext = React.createContext();

const App = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (typeof storedPrefs === "string") {
        return storedPrefs;
      }

      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        return "dark";
      }
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (theme !== undefined) rawSetTheme(theme === "dark" ? "light" : "dark");

  const toggleTheme = () => {
    const rawTheme = theme === "dark" ? "light" : "dark";
    rawSetTheme(rawTheme);
    setTheme(rawTheme);
  };

  useEffect(() => {
    getInitialTheme();
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ToggleThemeContext.Provider value={toggleTheme}>
          <MainApp2 />
        </ToggleThemeContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

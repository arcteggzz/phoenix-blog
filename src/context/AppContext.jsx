import React from "react";
import { useState, useEffect } from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

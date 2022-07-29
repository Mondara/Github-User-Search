import React, { useState } from "react";
import { ThemeContext, initialThemeState } from "./ThemeContext";
import './theme.css'

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);
  const toggleTheme = () => {
    if(theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark');
    }
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className={`main theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
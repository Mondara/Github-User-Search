import React from "react";

interface IThemeContext {
  theme: string;
  toggleTheme?: () => void;
}

export const initialThemeState = {
  theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
}

export const ThemeContext = React.createContext<IThemeContext>(initialThemeState);


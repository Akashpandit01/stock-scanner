import { createContext, useState } from "react";

// create context
export const ThemeContext =
  createContext();

function ThemeProvider({ children }) {

  // theme state
  const [darkMode, setDarkMode] =
    useState(false);

  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
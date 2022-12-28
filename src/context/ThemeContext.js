import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(sessionStorage.getItem("theme")) || false
  );

  const toggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

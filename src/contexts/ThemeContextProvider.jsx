import { createContext } from "react";
import { useState } from "react";
export const themeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);
  const theme = { isDark, setIsDark };
  return <themeContext.Provider value={theme}>{children}</themeContext.Provider>;
};

export default ThemeContextProvider;

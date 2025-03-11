import { createContext, useState , ReactNode ,Dispatch, SetStateAction, useEffect } from "react";


export interface ThemeContextType{
  theme :"dark"|"light",
  setTheme: Dispatch<SetStateAction<"dark" | "light">>; 
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children } : { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">((localStorage.getItem("theme") as "light" | "dark") ?? "dark");

  useEffect(() => {
    localStorage.setItem('theme',theme)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

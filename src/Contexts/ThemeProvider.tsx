import { createContext, useState , ReactNode ,Dispatch, SetStateAction } from "react";


export interface ThemeContextType{
  theme :"dark"|"light",
  setTheme: Dispatch<SetStateAction<"dark" | "light">>; 
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children } : { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

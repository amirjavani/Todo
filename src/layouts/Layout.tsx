import { ReactNode, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext } from "../Contexts/ThemeProvider";

export default function Layout({ children }: {children:ReactNode}) {
  
  const theme = useContext(ThemeContext);
  console.log(theme)
  return (
    <div className={`${theme?.theme=='dark'?'bg-[#3d465a] text-white' :'bg-white text-[#3d465a]'} pt-2 transition-all min-h-screen`}>
      <Header />
      <div className="mx-8 md:mx-20 min-h-[60vh]">{children}</div>
      <Footer />
    </div>
  );
}

import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext } from "../Contexts/ThemeProvider";

export default function Layout({ children }) {
  
  const theme = useContext(ThemeContext);
  
  return (
    <div className={`${theme.theme=='dark'?'bg-[#3d465a] text-white' :'bg-white text-[#3d465a]'} pt-2 transition-all`}>
      <Header />
      <div className="mx-8 md:mx-20">{children}</div>
      <Footer />
    </div>
  );
}

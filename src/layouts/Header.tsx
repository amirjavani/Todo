import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import logo from "../assets/done.png";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeProvider";

function Header() {

  const theme = useContext(ThemeContext);
  console.log(theme?.theme);
  
  return (
    <header className={`h-[60px] md:h-[100px] ${theme?.theme=='dark'?'bg-blue-300':'bg-blue-200'} rounded-4xl mx-2 flex flex-row justify-between shadow-xl mb-8`}>
      <div className="flex flex-row h-full items-center">
        <img className="h-[80%] p-3" src={logo} alt="logo" />
        <p className="font-bold text-xl md:text-3xl">TODO</p>
      </div>
      <div className="text-[black] flex gap-1 p-0.5 flex-row my-auto mr-5 items-center text-2xl hover:cursor-pointer bg-blue-50 rounded-3xl">
        <MdOutlineDarkMode
          onClick={() => theme?.setTheme('dark')}
          className={`${
            theme?.theme == "dark" ? "text-white bg-blue-300" : ""
          }  text-2xl md:text-4xl bg-blue-50 hover:bg-blue-300 hover:text-white active:bg-blue-400 transition  rounded-3xl p-1`}
        />
        <MdOutlineLightMode
          onClick={() => theme?.setTheme("light")}
          className={`${
            theme?.theme == "light" ? "text-white bg-blue-300" : ""
          } text-2xl md:text-4xl bg-blue-50 hover:bg-blue-300 hover:text-white active:bg-blue-400 transition  rounded-3xl p-1`}
        />
      </div>
    </header>
  );
}

export default Header;

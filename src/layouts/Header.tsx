import {  MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import logo from "../assets/done.png";


function Header() {

  return (
    <header className="h-[60px] md:h-[100px] bg-blue-200 rounded-4xl m-2 flex flex-row justify-between shadow-xl mb-8">
      <div className="flex flex-row h-full items-center">
        <img className="h-[80%] p-3" src={logo} alt="logo" />
        <p className="font-bold text-xl md:text-3xl">TODO</p>
      </div>
      <div
        className="flex gap-1 flex-row my-auto mr-5 items-center text-2xl hover:cursor-pointer bg-blue-50 rounded-3xl">
        <MdOutlineDarkMode className="text-2xl md:text-4xl bg-blue-50 hover:bg-blue-300 hover:text-white active:bg-blue-400 transition  rounded-3xl p-1" />
        <MdOutlineLightMode className="text-2xl md:text-4xl bg-blue-50 hover:bg-blue-300 hover:text-white active:bg-blue-400 transition  rounded-3xl p-1" />
      </div>
    </header>
  );
}

export default Header;

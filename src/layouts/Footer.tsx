import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="text-center border-t-blue-200 border-t-2 flex flex-row justify-between  p-5 mt-10 bg-blue-50 ">
      <div className="flex flex-row justify-start items-center gap-1.5">
        <Link to={"https://github.com/amirjavani"}>
          <IoLogoGithub className="text-3xl p-1 bg-blue-200 rounded-3xl" />
        </Link>
        <Link to={"https://www.linkedin.com/in/amirjavani/"}>
          <IoLogoLinkedin className="text-3xl p-1 bg-blue-200 rounded-3xl" />
        </Link>
      </div>

      <span>© 2025 TODO</span>
    </footer>
  );
}

export default Footer;

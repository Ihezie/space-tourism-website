import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeBtn from "../assets/shared/icon-close.svg";
import { useState } from "react";
import SingleLink from "./SingleLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const navLinks = ["home", "destination", "crew", "technology"];

  return (
    <header className="flex items-center justify-between pt-6 px-6 absolute top-0 right-0 left-0 md:pt-0 md:pr-0 lg:pt-12 lg:pl-14 xl:justify-between">
      <Link to="/" className="hover:scale-110">
        <img src={logo} alt="logo" />
      </Link>
      <img
        src={hamburger}
        alt="hamburger"
        className="cursor-pointer md:hidden"
        onClick={() => {
          setShowNavLinks(true);
        }}
      />
      <div className="w-3/12 border-b z-10 hidden xl:block opacity-20 absolute left-[11.45%]"></div>

      <nav
        className={`fixed duration-700 bg-white/5 min-w-[70%] right-0 top-0 h-screen px-5 py-8 text-xl backdrop-blur-2xl z-10 md:min-w-[60%] lg:min-w-[70%] md:static md:translate-x-0 md:h-24 md:p-0 md:backdrop-blur-none md:text-base lg:backdrop-blur-2xl xl:w-3/5 xl:z-0  ${
          showNavLinks ? "" : "translate-x-full"
        } `}
      >
        <img
          src={closeBtn}
          alt="close button"
          className="absolute right-5 md:hidden"
          onClick={() => {
            setShowNavLinks(false);
          }}
        />
        <ul className="pt-20 text-white flex flex-col gap-8 md:flex-row md:pt-0 md:h-full md:items-center md:justify-center lg:gap-14">
          {navLinks.map((item, index) => (
            <SingleLink text={item} key={index} index={index} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;

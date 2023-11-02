import { NavLink } from "react-router-dom";

const SingleLink = ({ text, index }) => {
  return (
    <li className="tracking-[2.7px] md:h-full md:flex md:items-end">
      <NavLink
        to={`/${text === "home" ? "" : text}`}
        className="uppercase md:h-2/3 hover:md:border-b-[3px] hover:md:border-b-white/50 duration-100"
      >
        <span className="mr-5 md:hidden lg:inline">0{index}</span>
        {text}
      </NavLink>
    </li>
  );
};
export default SingleLink;

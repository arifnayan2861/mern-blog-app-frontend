import React from "react";
import { images } from "../constants";

const navItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "FAQ" },
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2">
        {name}
      </a>
      <span className="text-blue-500 transition-all duration-500 font-bold absolute right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div>
          <img src={images.Logo} alt="logo" />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button className="border-2 border-blue-500 text-blue-500 font-semibold rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;

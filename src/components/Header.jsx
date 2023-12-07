import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { images } from "../constants";
import { logout } from "../store/actions/user";

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  {
    name: "Pages",
    type: "dropdown",
    dropdownPages: ["About Us", "Contact Us"],
  },
  { name: "Pricing", type: "link" },
  { name: "FAQ", type: "link" },
];

const NavItem = ({ item }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdownHandler = () => {
    setIsDropdownVisible((currentState) => {
      return !currentState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "dropdown" ? (
        <div className="flex flex-col items-center">
          <button
            onClick={toggleDropdownHandler}
            className="px-4 py-2 flex items-center gap-x-1"
          >
            {item.name}
            {isDropdownVisible ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </button>
          <div
            className={`${
              isDropdownVisible ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="text-center bg-dark-light lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.dropdownPages.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 lg:text-dark-light"
                >
                  {item}
                </a>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="text-blue-500 transition-all duration-300 font-black absolute right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 cursor-pointer">
            /
          </span>
        </>
      )}
    </li>
  );
};

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleNavbarHandler = () => {
    setIsNavVisible((currentState) => {
      return !currentState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div>
          <img src={images.Logo} alt="logo" className="w-16" />
        </div>
        <div className="z-50 lg:hidden">
          {isNavVisible ? (
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={toggleNavbarHandler}
            />
          ) : (
            <AiOutlineMenu
              className="w-6 h-6 cursor-pointer"
              onClick={toggleNavbarHandler}
            />
          )}
        </div>
        <div
          className={`${
            isNavVisible ? "right-0" : "-right-full"
          } transition-all duration-500 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-49 flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white lg:text-dark-light flex flex-col items-center gap-y-6 lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="text-white lg:text-dark-light flex flex-col items-center gap-y-6 lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="flex items-center gap-x-1 mt-6 lg:mt-0 border-2 border-blue-500 text-blue-500 font-semibold rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDropdown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="text-center bg-dark-light lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden">
                      <button
                        onClick={() => navigate("/profile")}
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 lg:text-dark-light"
                      >
                        Profile
                      </button>
                      <button
                        onClick={logoutHandler}
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 lg:text-dark-light"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="mt-6 lg:mt-0 border-2 border-blue-500 text-blue-500 font-semibold rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemClass = ({ isActive }) =>
    isActive
      ? "underline  font-semibold text-white"
      : "hover:underline text-white";

  return (
    <nav className="bg-[#355e3b]  text-gray-100 py-4 flex items-center justify-between sticky top-0 w-full z-50 transition duration-300 px-[3vw] md:px-[4vw] lg:px-[14vw]">
      <div className="text-xl font-bold mr-auto">🌱 PlantBot</div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-green-700 md:static md:block md:w-auto md:bg-transparent`}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 p-4 md:p-0">
          <NavLink to="/" className={navItemClass}>
            Home
          </NavLink>
          <NavLink to="/chat" className={navItemClass}>
            Chat
          </NavLink>
          <NavLink to="/explore" className={navItemClass}>
            Explore
          </NavLink>
          <NavLink to="/my-plants" className={`${navItemClass}`}>
            My-Plants
          </NavLink>
          <NavLink to="/signin" className={`${navItemClass}`}>
            SignIn
          </NavLink>
          <NavLink to="/signup" className={`${navItemClass}`}>
            SignUp
          </NavLink>
        </div>
      </div>

      {/* Right: Hamburger Button (mobile only) */}
      <button className="ml-auto md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;

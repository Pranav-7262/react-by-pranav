import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Project Title */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-blue-700">SnapNote</h1>
        <span className="hidden sm:inline-block text-sm text-gray-500 tracking-wide">
          | Code & Notes Saver
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <NavLink
          to="/docs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "hover:text-blue-600 transition"
          }
        >
          Docs
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "hover:text-blue-600 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/snaps"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "hover:text-blue-600 transition"
          }
        >
          Snaps
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;

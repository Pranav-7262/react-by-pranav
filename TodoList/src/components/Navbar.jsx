import React from "react";
// Assuming you have a global CSS file for styles

function Navbar() {
  return (
    <nav className="flex justify-between bg-indigo-900 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-7">
        <li className="cursor-pointer hover:font-bold transition ease-in-out duration-75">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition ease-in-out duration-75">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

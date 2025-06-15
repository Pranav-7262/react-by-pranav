import React from "react";
import { NavLink, Outlet } from "react-router";

function College() {
  return (
    <div>
      <h1>College Component</h1>
      <NavLink to="student">Student</NavLink> <br />
      <NavLink to="dapartment">Department</NavLink> <br />
      <NavLink to="details">Details</NavLink>
      <br />
      <Outlet />
    </div>
  );
}

export default College;

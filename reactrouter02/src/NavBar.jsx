import React from "react";
import { Link } from "react-router";
function NavBar() {
  return (
    <div>
      <div>
        <Link className="link">
          <h2>Logo</h2>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/college">
              College
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

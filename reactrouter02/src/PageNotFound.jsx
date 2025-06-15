import React from "react";
import { Link } from "react-router";
function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found , 404 ERROR</h1>
      <Link to="/">GO to home</Link>
    </div>
  );
}

export default PageNotFound;

import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        Lessons
      </Link>
    </div>
  );
};

export default Nav;

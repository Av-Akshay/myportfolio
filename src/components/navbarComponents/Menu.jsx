import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="navbar-menu">
      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About"> About</NavLink>
        </li>
        <li>
          <NavLink to="/Project"> Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Contact"> Contact</NavLink>
        </li>
      </ul>
      <div className="links">
        <NavLink
          target="_blank"
          className="btn-links"
          to="https://www.linkedin.com/in/akshay-chauhan-08b613224"
        >
          <AiFillLinkedin />
        </NavLink>
        <NavLink
          target="_blank"
          className="btn-links"
          to="https://github.com/Av-Akshay"
        >
          <AiFillGithub />
        </NavLink>
      </div>
    </div>
  );
};
export default Menu;

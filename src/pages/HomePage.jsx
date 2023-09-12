import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="contain">
        <h1 className="heading"> AKSHAY CHAUHAN</h1>
        <p className="para">I'M A WEB DEVLOPER</p>
        <button className="btn">
          <NavLink to="/About"> ABOUT ME</NavLink>
        </button>
      </div>
    </div>
  );
};
export default Home;

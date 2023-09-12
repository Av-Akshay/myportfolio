import React from "react";
import Html from "../../assests/html.png";
import Css from "../../assests/css.png";
import Js from "../../assests/js.png";
import ReactImg from "../../assests/React.png";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skill-heading heading"> SKILLS</h1>
      <h2>Languages I can work upon ...</h2>
      <div className="tecnologies">
        <div className="image">
          <img src={Html} alt="html" />
        </div>
        <div className="image">
          <img src={Css} alt="css" />
        </div>
        <div className="image">
          <img src={Js} alt=" javaScript" />
        </div>
        <div className="image">
          <img src={ReactImg} alt="reactJs" />
        </div>
      </div>
    </div>
  );
};
export default Skills;

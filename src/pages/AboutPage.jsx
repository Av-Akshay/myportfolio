import React from "react";
import Summary from "../components/aboutPageComponents/Summary";
import Education from "../components/aboutPageComponents/Education";
import Skills from "../components/aboutPageComponents/Skills";

const About = () => {
  return (
    <div className="about-me">
      <Summary />
      <Education />
      <Skills />
    </div>
  );
};
export default About;

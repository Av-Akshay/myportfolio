import React from "react";
import Ecommerce from "../components/projecPageCompnents/Ecommerce";
import SchoolData from "../components/projecPageCompnents/SchoolData";
import GoogleKeep from "../components/projecPageCompnents/GoogleKeep";
import TodoList from "../components/projecPageCompnents/TodoList";

const Project = () => {
  return (
    <div className=" my-projects">
      <div className="project-heading">
        <h1 className="heading">PROJECTS</h1>
      </div>
      <div className="project-list">
        <Ecommerce />
        <SchoolData />
        <GoogleKeep />
        <TodoList />
      </div>
    </div>
  );
};
export default Project;

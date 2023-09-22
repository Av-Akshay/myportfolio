import React from "react";
import { NavLink } from "react-router-dom";

const TodoList = () => {
  return (
    <div className="project-card">
      <div>
        <h1>4. Project Title: To Do List</h1>
      </div>
      <div className="project-details">
        <div className="project-sub-details">
          <h2>Project Description :</h2>
          <p className="pera">
            This website is used to helps you organize tasks, prioritize
            activities, and stay focused on what needs to be done, enhancing
            productivity and reducing stress.
          </p>
          <h2>
            visit:
            <NavLink className="btn" to="https://chauhanstodolist.netlify.app/">
              To Do List
            </NavLink>
          </h2>
        </div>
        <div className="project-sub-details">
          <h2>Key Features:</h2>
          <ul>
            <li className="feature-list">
              <span> Responsive Design:</span>
              <p className="pera">
                The project is fully responsive, enjoyable experience on various
                devices including desktops, tablets, and smartphones.
              </p>
            </li>
            <li className="feature-list">
              <span> Redux:</span>
              <p className="pera">
                It transfer the data to the every child component and solve the
                props driling problem.
              </p>
            </li>
            <li className="feature-list">
              <span> Redux-persist:</span>
              <p className="pera">
                Redux-persist is used to store the state even when we reload the
                page.
              </p>
            </li>
          </ul>
        </div>
        <div className="project-sub-details">
          <h2>Technologies Used:</h2>
          <ul>
            <li className="pera">JSX</li>
            <li className="pera">Css</li>
            <li className="pera">Redux</li>
            <li className="pera">Redux-persist</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

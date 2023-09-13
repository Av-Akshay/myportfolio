import React from "react";
import { NavLink } from "react-router-dom";

const SchoolData = () => {
  return (
    <div className="project-card">
      <div>
        <h1>2. Project Title: School Student List</h1>
      </div>
      <div>
        <div className="project-sub-details">
          <h2>Project Description :</h2>
          <p className="pera">
            This website is used to store the Student information of various
            School or colleges. This website is full responsive we can open this
            into laptop , tablet and smartPhone also.
          </p>
          <h2>
            visit:
            <NavLink
              className="btn"
              to="https://chauhanschoollist.netlify.app/"
            >
              Student Lists
            </NavLink>
          </h2>
        </div>
        <div className="project-sub-details">
          <h2>Key Features:</h2>
          <ul>
            <li className="feature-list">
              <span> Responsive Design:</span>
              <p className="pera">
                The project is responsive, ensuring a consistent and enjoyable
                experience on various devices including desktops, tablets, and
                smartphones.
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
            <li className="feature-list">
              <span> School List</span>
              <p className="pera">
                Display a list of School and Colleges name with delete and edit
                button. We can delete or edit the school or college name.
              </p>
            </li>
            <li className="feature-list">
              <span> Student List</span>
              <p className="pera">
                Display a list of Students which have personal information about
                students. We can also delete or edit the students information.
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
export default SchoolData;

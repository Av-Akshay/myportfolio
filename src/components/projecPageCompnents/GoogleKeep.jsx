import React from "react";
import { NavLink } from "react-router-dom";

const GoogleKeep = () => {
  return (
    <div className="project-card">
      <div>
        <h1>3. Project Title: Google Keep Clone</h1>
      </div>
      <div>
        <div className="project-sub-details">
          <h2>Project Description :</h2>
          <p className="pera">
            This website is used to create notes and also add labels to these
            notes. This website is full responsive we can open this into laptop
            , tablet and smartPhone also.
          </p>
          <h2>
            visit:
            <NavLink
              className="btn"
              to="https://chauhangooglekeep.netlify.app//"
            >
              Google Keep
            </NavLink>
          </h2>
        </div>
        <div className="project-sub-details">
          <h2>Key Features:</h2>
          <ul>
            <li className="feature-list">
              <span>Product Display:</span>
              <p className="pera">
                Display a note with lable. we can detele or edit these notes.
              </p>
            </li>
            <li className="feature-list">
              <span> Responsive Design:</span>
              <p className="pera">
                The project is responsive, ensuring a consistent and enjoyable
                experience on various devices, including desktops, tablets, and
                smartphones.
              </p>
            </li>
            <li className="feature-list">
              <span> Redux:</span>
              <p className="pera">
                It transfer the data from his storage to every child Component.
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
              <span> React-icons:</span>
              <p className="pera">
                React icons can used purely for decorative purposes to add
                visual interest to a webpage.
              </p>
            </li>
          </ul>
        </div>
        <div className="project-sub-details">
          <h2>Technologies Used:</h2>
          <ul>
            <li className="pera">ReactJs</li>
            <li className="pera">css</li>
            <li className="pera">Redux</li>
            <li className="pera">Redux-persist</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default GoogleKeep;

import React from "react";
import { NavLink } from "react-router-dom";

const Ecommerce = () => {
  return (
    <div className="project-card">
      <div className="sub-project-heading">
        <h1>1. Project Title: E-commerse Website</h1>
      </div>
      <div className="project-details">
        <div className="project-sub-details">
          <h2>Project Description:</h2>
          <p className="pera">
            The Ecommerse Website is a live project developed using ReactJS,
            Redux-toolkit, Redux-persist and styled components to showcase a
            collection of products. This project is designed to provide an
            interactive and visually appealing platform for users to browse and
            explore various products.
          </p>
          <h2>
            visit:-
            <NavLink className="btn" to="https://chauhanstore.netlify.app/">
              My Store
            </NavLink>
          </h2>
        </div>
        <div className="project-sub-details">
          <h2>Key Features:</h2>
          <ul>
            <li className="feature-list">
              <span>Product Display:</span>
              <p className="pera">
                The website displays a list of products. All product fatch
                dynamically which is comes from API call. Users can easily see
                the products in the Product page.
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
              <span> Styled Component:</span>
              <p className="pera">
                Styled Component is used to add subtle transitions and
                animations, enhancing the visual appeal and user interactivity.
              </p>
            </li>
            <li className="feature-list">
              <span> Redux-toolkit:</span>
              <p className="pera">
                Redux-toolkit is used to solve the problem of prop drilling. It
                transfer the data to the every child component and solve the
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
            <li className="pera">Styled Components</li>
            <li className="pera">ReactJS</li>
            <li className="pera">Redux-toolkit</li>
            <li className="pera">Redux-persist</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Ecommerce;

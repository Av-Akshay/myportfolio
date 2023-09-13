import React from "react";

const Details = (props) => {
  return (
    <div>
      <div className="sub-detail">
        <button className="btn">{props.btn}</button>
        <h3>{props.heading}</h3>
      </div>
      <p>{props.pera}</p>
    </div>
  );
};
export default Details;

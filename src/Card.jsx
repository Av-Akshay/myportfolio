import React from "react";

const Card = (props) => {
  return (
    <div className="cards">
      <h1>{props.colg}</h1>
      <p>{props.degree}</p>
      <p>{props.pass}</p>
      <p>cgpa:{props.cgpa}</p>
    </div>
  );
};
export default Card;

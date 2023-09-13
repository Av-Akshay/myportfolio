import React from "react";

const Form = () => {
  return (
    <form>
      <input className="input-filds" type="text" placeholder=" Name" />
      <input className="input-filds" type="email" placeholder="E-mail Adress" />
      <input className="input-filds" type="text" placeholder="Subject" />
      <textarea
        className="input-filds"
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="Message"
      ></textarea>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;

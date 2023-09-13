import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:recipient@example.com?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setEmail("");
    setMessage("");
    setName("");
    setSubject("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        className="input-filds"
        type="text"
        placeholder=" Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        className="input-filds"
        type="email"
        value={email}
        placeholder="E-mail Adress"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        className="input-filds"
        type="text"
        value={subject}
        placeholder="Subject"
        onChange={(event) => {
          setSubject(event.target.value);
        }}
      />
      <textarea
        className="input-filds"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
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

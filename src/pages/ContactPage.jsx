import React from "react";
import Details from "../components/contactPageComponent/ContactDetail";
import { HiLocationMarker } from "react-icons/hi";
import { MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import Form from "../components/contactPageComponent/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <h1 className="heading">Contact</h1>
        <div className="contact-details">
          <div className="details">
            <Details
              btn={<HiLocationMarker />}
              heading="Location :"
              pera="Saharanpur"
            />
            <Details
              btn={<MdMailOutline />}
              heading="E-mail :"
              pera="akshuchauhan1jan@gmail.com"
            />
            <Details
              btn={<BiPhoneCall />}
              heading=" Phone :"
              pera="+91 9870642178"
            />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};
export default Contact;

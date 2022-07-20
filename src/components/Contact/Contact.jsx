import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-scroll";
const Contact = () => {
  return (
    <div className="contact_container" id="contact">
      <div className="contact_header">Get In Touch</div>
      <div className="details">
        <HiOutlineMail /> <p>Snirbenarush@gmail.com</p>
        <BiPhoneCall /> <p>+972-587261181</p>
        <Link to="nav" smooth={true}>
          <button className="backtotop">back to top</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

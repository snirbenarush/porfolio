import React from "react";
import "./nav.css";
import CV from "../../Imgs/CV.png";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <div className="nav_container" id="nav">
      <p className="greet">GREETINGS</p>
      <ul className=" nav_data">
        <Link to="about" smooth={true}>
          <li className="info">about me</li>
        </Link>
        <Link to="projects" smooth={true}>
          <li className="info">projects</li>
        </Link>

        <Link to="contact" smooth={true}>
          <li className="info">contact </li>
        </Link>
      </ul>
      <div>
        <button
          className="btn_resume"
          onClick={() => {
            window.open(CV);
          }}
        >
          resume
        </button>
      </div>
    </div>
  );
};

export default Nav;

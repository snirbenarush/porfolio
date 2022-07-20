import React from "react";
import "./links.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

const Links = () => {
  return (
    <div className="link_container">
      <FiGithub
        className="links"
        onClick={() => window.open("https://github.com/snirbenarush")}
      />
      <FiLinkedin
        className="links"
        onClick={() => {
          window.open("https://www.linkedin.com/in/sba11/");
        }}
      />
      <GrInstagram
        className="links"
        onClick={() => window.open("https://instagram.com/snir.22/")}
      />
    </div>
  );
};

export default Links;

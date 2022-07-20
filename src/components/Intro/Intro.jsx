import React from "react";
import "./intro.css";
import { useTypewriter } from "react-simple-typewriter";
const Intro = () => {
  const { text } = useTypewriter({
    words: ["Hi, my name is,"],
    loop: 1,
    typeSpeed: 200,
  });
  return (
    <div className="intro_container" id="intro">
      <p>{text}</p>
      <div className="tag_container">
        <p className="name_tag">Snir Ben Arush.</p>
        <p className="build_tag">I build things for the web.</p>
      </div>
      <p className="intro_context">
        I'm a full stack developer with a passion towards the frontend
        development,
        <br /> seeking for creating,building & designing exceptional digital
        experiences in the web,
        <br /> and resolving modern problems.
      </p>
    </div>
  );
};

export default Intro;

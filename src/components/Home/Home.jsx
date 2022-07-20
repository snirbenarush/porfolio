import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Links from "../Links/Links";
import Nav from "../Nav/Nav";
import Project from "../Projects/Project";

const Home = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Project />
      <Contact />
      <Links />
    </div>
  );
};

export default Home;

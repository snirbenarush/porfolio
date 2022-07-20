import React, { useState } from "react";
import { projectData } from "./projects";
import "./project.css";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
const Project = () => {
  return (
    <div id="projects">
      <div className="project_title">My Projects</div>
      <div className="project">
        <div className="tinder_content contents">
          <div className="right_content">
            <div className="tinder_clone_name right-title">
              {projectData[0].title}
            </div>
            <div className="tinder_clone_about right-about">
              {projectData[0].about}
            </div>
            <div className="tinder_clone_lang right-lang">
              {projectData[0].languages}
            </div>
            <div className="tinder_clone_url right-url">
              <BiLinkExternal
                style={{ width: "24px", height: "24px" }}
                onClick={() => window.open(projectData[0].url)}
              />{" "}
            </div>
            <div className="tinder_clone_git right-git">
              <FiGithub
                style={{ width: "24px", height: "24px" }}
                onClick={() => window.open(projectData[0].github)}
              />{" "}
            </div>
          </div>
          <div
            className=" tinder_clone_img  right img"
            onClick={() => window.open(projectData[0].url)}
          >
            {projectData[0].image}
          </div>
        </div>
        <div className="disney_content contents">
          <div className="left_content">
            <div className="disney_clone_name left-title">
              {projectData[1].title}
            </div>
            <div className="disney_clone_about left-about">
              {projectData[1].about}
            </div>
            <div className="disney_clone_lang left-lang">
              {projectData[1].languages}
            </div>
            <div className="disney_clone_url left-url">
              <BiLinkExternal
                style={{ width: "24px", height: "24px" }}
                onClick={() => window.open(projectData[1].url)}
              />{" "}
            </div>
            <div className="disney_clone_git left-git">
              <FiGithub
                style={{ width: "24px", height: "24px" }}
                onClick={() => window.open(projectData[1].github)}
              />{" "}
            </div>
          </div>
          <div
            className="disney_clone_img left img"
            onClick={() => window.open(projectData[1].url)}
          >
            {projectData[1].image}
          </div>
        </div>
        <div className="gym_content contents">
          <div className="right_content">
            <div className="gym_clone_name right-title">
              {projectData[2].title}
            </div>
            <div className="gym_clone_about right-about">
              {projectData[2].about}
            </div>
            <div className="gym_clone_lang right-lang">
              {projectData[2].languages}
            </div>
            <div className="gym_clone_url right-url">
              <BiLinkExternal
                onClick={() => window.open(projectData[2].url)}
                style={{ width: "24px", height: "24px" }}
              />{" "}
            </div>
            <div className="gym_clone_git right-git">
              <FiGithub
                style={{ width: "24px", height: "24px" }}
                onClick={() => window.open(projectData[2].github)}
              />{" "}
            </div>
          </div>
          <div
            className="gym_clone_img right img"
            onClick={() => window.open(projectData[2].url)}
          >
            {projectData[2].image}
          </div>
        </div>
        <div className="tiktok_content contents">
          <div className="left_content">
            <div className="tiktok_clone_name left-title">
              {projectData[3].title}
            </div>
            <div className="tiktok_clone_about left-about">
              {projectData[3].about}
            </div>
            <div className="tiktok_clone_lang left-lang">
              {projectData[3].languages}
            </div>
            <div className="tiktok_clone_url left-url">
              <BiLinkExternal
                style={{ width: "24px", height: "24px" }}
                onClick={() => window.open(projectData[3].url)}
              />{" "}
            </div>
            <div className="left-git">
              <FiGithub
                style={{ width: "24px", height: "24px" }}
                onClick={() => window.open(projectData[3].github)}
                value="asdasdsd"
              />{" "}
            </div>
            <div
              className="tiktok_clone_img left img"
              onClick={() => window.open(projectData[3].url)}
            >
              {projectData[3].image}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

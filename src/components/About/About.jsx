import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="header_section">Get To Know Me</div>

      <div>
        <div className="about_context">
          <p className="introduce">
            Hello! My name is Snir and i like to create anything web related.
            Since I was 6 my passion was drawing and creating things from my
            imagination.I grew up training alot and competing in speedcubing
            (solving rubik's cubes) until the age of 19. Fast forward to ending
            my service in the IDF a few friends introduced me to coding. I was
            always intriged by cool website and when i dug a little deeper i
            began my journey towards creating my own websites with HTML & CSS. I
            really enjoyed making something useful from my imagination and from
            there I decided that my career was leaning towards web developing,
            now im addicted. The journey is still long but my hunger for more
            grows bigger everyday. Here are a few technologies I've been working
            with recently:
          </p>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHEypcK9fiIjg/profile-displayphoto-shrink_400_400/0/1657375172728?e=1663804800&v=beta&t=Q4XQjNgQ6V2i1u1kZl9GgH_Q8MvKz_9nnaZoFRNwWwc"
            className="profile_img"
          />
        </div>
        <ul className="lang_section">
          <li>Javascript (ES6+)</li>
          <li>React</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

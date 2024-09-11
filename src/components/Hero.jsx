import React from "react";
import mypic from "../images/mypic.png";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-texts">
        <h1>
          Hello I'm
          <br />
          <span> Sajad</span>
          <br />a Front-End Developer
        </h1>
        <p>
          I am a motivated and passionate developer with a strong focus on
          Front-end development. Over the past two years, I have self-studied
          Front-End development, specializing in React.js, and have gained
          extensive knowledge of it’s features and libraries. I am committed to
          continuous learning and am driven by a desire to enhance my skills in
          a professional environment. I am actively seeking opportunities to
          collaborate with innovative companies where I can contribute to
          impactful projects and grow within the industry.
         
        </p>
        <div className="btn-group">
          <a href="/sajad-shokraei-resume.pdf" download>
            <button className="btn know-more-btn">Download My Resume</button>
          </a>
          <a href="#footer">
            <button className="btn contact-me-btn">Contact Me</button>
          </a>
        </div>
      </div>

      <div className="home-image">
        <a href="https://www.instagram.com/sajadzshoki?igsh=NXl1dGt2andvcDFh">
          <img
            alt="sajad_image"
            src={mypic}
            className="my-pic"
            title="go to my instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;

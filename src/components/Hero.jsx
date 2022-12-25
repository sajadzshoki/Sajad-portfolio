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
          Im very Happy You are here{" "}
          <i class="bx bx-happy-heart-eyes bx-flashing"></i>
        </p>
        <div className="btn-group">
          <a href="#about-me">
            <button className="btn know-more-btn">Know More About Me</button>
          </a>
          <a href="#footer">
            <button className="btn contact-me-btn">Contact Me</button>
          </a>
        </div>
      </div>

      <div className="home-image">
        <a href="https://www.instagram.com/p/ChDAv3hsVhY/">
          <img
            alt="sajad_image"
            src={mypic}
            className="my-pic"
            title="go to my instagram"
          />
        </a>
      </div>
      <div className="circle1"></div>
    </div>
  );
};

export default Home;

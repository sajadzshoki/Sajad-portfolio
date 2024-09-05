import React from "react";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <button className="social-media-btn">
        <a href="https://github.com/sajadzshoki" title="Github">
          <i class="bx bxl-github"></i>
        </a>
      </button>

      <button className="social-media-btn">
        <a href="https://www.linkedin.com/in/sajadshokraei/" title="Linkedin">
        <i class='bx bxl-linkedin' ></i>
        </a>
      </button>

      <button className="social-media-btn">
        <a href="https://www.instagram.com/sajadzshoki/" title="Instagram">
        <i class='bx bxl-instagram' ></i>
        </a>
      </button>
    </div>
  );
};

export default SocialMedia;

import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-container">
          <div className="contact-info">
            <h1>How To Contact Me</h1>
            <p>
              <i class="bx bx-envelope"></i> Email : sajadzshoki80@gmail.com
            </p>
            <p>
              <i class="bx bx-phone"></i> Phone Number : +98 9109069118
            </p>
            <p>
              <i class="bx bxl-telegram"></i> Telegram : @sajadzshoki
            </p>
            <p>
              <i class="bx bxl-instagram"></i> Instagram :
              <a href="https://www.instagram.com/sajadzshoki/"> sajadzshoki</a>
            </p>
          </div>
          <h1 className="footer-title">SAJAD'S PORTFOLIO</h1>
          <div>
            <div className="footer-right">
              <div className="footer-projects">
                <h2>My Best Projects so far</h2>
                <p>
                  <a href="https://sajadzshoki.github.io/Mytones/">Mytones</a>
                </p>
                <p>
                  <a href="https://youtube-clone-sajad.vercel.app">
                    Youtube Clone
                  </a>
                </p>
              </div>
              <div className="footer-skills">
                <h2>My Main Skills</h2>
                <p>Html</p>
                <p>Css</p>
                <p>JavaScript</p>
                <p>ReactJs</p>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          &copy;copyright 2022 sajad shokraei portfolio website
        </p>
      </div>
    </>
  );
};

export default Footer;

import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-container">
          <div className="contact-info">
            <h1>How To Contact Me</h1>
            <p>
              <i class="bx bx-envelope"></i> Email :
              <a href="mailto:sajadzshoki80@gmail.com"> sajadzshoki80@gmail.com</a>
            </p>
            <p>
              <i class="bx bx-phone"></i> Phone Number :{" "}
              <a href="tel:09109069118"> +98 9109069118</a>
            </p>
            <p>
              <i class="bx bxl-telegram"></i> Telegram :{" "}
              <a href="https://t.me/sajadzshoki"> @Sajadzshoki</a>
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
                  <a href="https://Task-Manager-sajad.vercel.app">Task Manager</a>
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

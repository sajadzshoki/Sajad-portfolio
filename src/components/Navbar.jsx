/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  
  return (
    <nav className="navbar" >
      <i class='bx bx-menu'></i>
      <h2>SAJAD PORTFOLIO</h2>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT ME</a>
        </li>
        <li>
          <a href="#">MY PROJECTS</a>
        </li>
        <li>
          <a href="#">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

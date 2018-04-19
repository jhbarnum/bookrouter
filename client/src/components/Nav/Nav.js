import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul className="nav navbar-nav">
      <a className="navbar-brand" href="/"> Tunafish App
      </a>
      <li><a href="/">Profile</a></li>
      <li><a href="/">Guest</a></li>
      <li><a href="/">Update</a></li>
    </ul>
    
  </nav>
);

export default Nav;
 
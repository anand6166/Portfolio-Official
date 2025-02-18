import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home"><i className="fa fa-home"></i> Home</a></li>
        <li><a href="#about"><i className="fa fa-user"></i> About</a></li>
        <li><a href="#services"><i className="fa fa-list"></i> Studies</a></li>
        <li><a href="#projects"><i className="fa fa-briefcase"></i> Projects</a></li>
        <li><a href="#contact"><i className="fa fa-comments"></i> Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

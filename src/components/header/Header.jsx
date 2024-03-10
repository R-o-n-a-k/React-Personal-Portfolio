import React from "react";
import "./Header.css";

function Header() {
  const navItems = ["Home", "About", "Projects", "Career", "Contact Us"];

  return (
    <div className="navbar">
      <ul>
        {navItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Header;

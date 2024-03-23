import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  //   const navItems = ["Home", "About", "Projects", "Career", "Contact Us"];

  /* --------------------------------- Toggle --------------------------------- */
  const [Toggle, showMenu] = useState(false);

  const menuItems = [
    { name: "HOME", path: "#home", icon: "house" },
    { name: "ABOUT", path: "#about", icon: "user" },
    { name: "PROJECTS", path: "#projects", icon: "folder-open" },
    { name: "CAREER", path: "#career", icon: "briefcase" },
    { name: "CONTACT", path: "#contact", icon: "envelope" },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <img src={logo} alt="" href="index.html" className="nav__logo" />
        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {menuItems.map((item) => (
              <li className="nav__item " key={item.name}>
                <a className="nav__link " href={item.path}>
                  <i className={`fa-solid fa-${item.icon} nav__icon`}></i>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="nav__close"
            id="nav-toggle"
            aria-label="nav-toggler"
            onClick={() => showMenu(!Toggle)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {/* <div className="menu__option"> */}
        <button
          type="button"
          className="nav__toggle"
          id="nav-toggle"
          aria-label="nav-toggler"
          onClick={() => showMenu(!Toggle)}
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Header;

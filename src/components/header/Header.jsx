import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";

function Header() {
  /* ---------------------------- change background navbar --------------------------- */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll__header");
    else header.classList.remove("scroll__header");
  });

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
    <>
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
          <DarkMode />
          <button
            type="button"
            className="nav__toggle"
            id="nav-toggle"
            aria-label="nav-toggler"
            onClick={() => showMenu(!Toggle)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;

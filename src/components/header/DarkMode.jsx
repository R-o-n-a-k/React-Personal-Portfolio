import React from "react";
import "./DarkMode.css";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <>
      <div className="toggleTheme" data-aos="fade-down">
        <input
          className="toggleSwitch"
          type="checkbox"
          id="switch"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <label className="toggleLabel" htmlFor="switch">
          Toggle
        </label>
      </div>
    </>
  );
};

export default DarkMode;

import "./ScrollUp.css";
import React from "react";

function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 500) scrollUp.classList.add("show__scroll");
    else scrollUp.classList.remove("show__scroll");
  });

  return (
    <a href="#home" className="scrollup">
      <i className="fas fa-chevron-up scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;

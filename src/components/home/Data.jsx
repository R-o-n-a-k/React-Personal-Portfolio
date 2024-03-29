import React from "react";
import MyResume from "../../assets/Ronak.pdf";
function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Hi, I'm <span>RONAK</span>
      </h1>

      <h3 className="home__subtitle">Front-End Developer</h3>

      <a
        download="Ronak Patel Resume"
        target="_blank"
        href={MyResume}
        className="button button--flex"
      >
        <span>
          Download CV <i className="fa-solid fa-angles-down"></i>
        </span>
      </a>
    </div>
  );
}

export default Data;

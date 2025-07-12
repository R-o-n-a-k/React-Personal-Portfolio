import React from "react";
import MyResume from "../../assets/RonakPatel_FrontendDeveloper.pdf";
import TextTransitionLoop from "./TextTransitionLoop";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title" data-aos="fade-up">
        Hi, I'm <span>RONAK</span>
      </h1>
      <TextTransitionLoop />

      <a
        download="RonakPatel_FrontendDeveloper_Resume"
        target="_blank"
        href={MyResume}
        className="button button--flex"
        data-aos="zoom-in-up"
      >
        <span>
          Download CV <i className="fa-solid fa-angles-down downloadI"></i>
        </span>
      </a>
    </div>
  );
}

export default Data;

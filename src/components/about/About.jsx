import React from "react";
import "./About.css";
import Skills from "./Skills";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__section">
        <div className="about__content">
          <div className="about__greet">
            <div className="about__intro__group">
              <h3 className="about__greeting">- Nice to Meet you !</h3>
              <h2 className="about__name"> Ronak Patel</h2>
            </div>
            <a href="#contactUs" className="button button--flex second__button">
              Got a Project ?
            </a>
          </div>
          <p className="about__intro">
            A dedicated & passionate programmer with a zeal for knowledge.
            <br />
            <br />I thrive on exploring new technologies and deeply committed to
            solving complex problems and making every challenge an opportunity
            to grow and excel.
          </p>
        </div>
        <div className="about__skills">
          <div className="skills__heading">
            <h2>Technical Skills</h2>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;

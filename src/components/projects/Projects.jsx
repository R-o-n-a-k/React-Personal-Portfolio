import React from "react";
import ProjectsDetail from "./ProjectsDetail";
import "./Project.css";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="heading">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Some of my work</span>
      </div>
      <ProjectsDetail />
    </section>
  );
}

export default Projects;

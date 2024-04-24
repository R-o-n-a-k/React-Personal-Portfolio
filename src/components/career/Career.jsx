import "./Career.css";
import React, { useState } from "react";
import EducationTab from "./EducationTab";
import WorkTab from "./WorkTab";

function Career() {
  const [activeTab, setActiveTab] = useState("Work");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="career section" id="career">
      <h2 className="section__title">Career</h2>
      <span className="section__subtitle">
        Educational Qualification & Work Experience
      </span>

      <div className="career__container container">
        <div className="tabs__container">
          <button
            className={`tab__button ${activeTab === "Work" ? "active" : ""}`}
            onClick={() => handleTabClick("Work")}
          >
            Work
          </button>

          <button
            className={`tab__button ${
              activeTab === "Education" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Education")}
          >
            Education
          </button>

          {activeTab === "Education" ? <EducationTab /> : <WorkTab />}
        </div>
      </div>
    </section>
  );
}

export default Career;

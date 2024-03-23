import React from "react";
import "./Career.css";

function Career() {
  const qualificationData = [
    {
      degree: "B.E. Information",
      name: "Atharva College of Engineering",
      year: "2018 - 2022",
    },
    {
      degree: "HSC",
      name: "Nirmala Memorial College",
      year: "2016 - 2018",
    },
    {
      degree: "SSC",
      name: "Poorna Prajna High School",
      year: "2008 - 2016",
    },
  ];

  const workData = [
    {
      position: "Senior Software Engineer",
      company: "Capgemini",
      year: "Current",
    },
    {
      position: "Software Developer",
      company: "Techq Konnect",
      year: "Aug 2021-Sept 2021",
    },
    {
      position: "Web Developer",
      company: "Sahu Technologies",
      year: "Jun 2021-Jul 2021",
    },
  ];

  return (
    <section className="career section" id="career">
      <h2 className="section__title">Career</h2>
      <span className="section__subtitle">
        Educational Qualification & Work Experience
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button-flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Work
          </div>
          <div className="qualification__button button-flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content-active">
            <div className="qualification__data">
              <div>
                {workData.map((data) => (
                  <div>
                    <h3 className="qualification__title">{data.position}</h3>
                    <span className="qualification__subtitle">{data.name}</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i>
                      {data.year}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                {qualificationData.map((data) => (
                  <div>
                    <h3 className="qualification__title">{data.degree}</h3>
                    <span className="qualification__subtitle">{data.name}</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i>
                      {data.year}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;

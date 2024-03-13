import React from "react";
import Marquee from "react-fast-marquee";
// import "./Skills.css";
function Skills() {
  const skillIcons = [
    { name: "html5", intro: "HTML5" },
    { name: "css3", intro: "CSS3" },
    { name: "javascript", intro: "JavaScript" },
    { name: "react", intro: "React" },
    { name: "python", intro: "Python" },
    { name: "java", intro: "Java" },
    { name: "c-plus-plus", intro: "C++" },
    { name: "git", intro: "git" },
    { name: "stripe", intro: "SQL" },
    { name: "figma", intro: "Figma" },
    { name: "sass", intro: "Sass" },
    { name: "bootstrap", intro: "BootStrap" },
  ];

  return (
    <>
      {/* <div className="skill__group">
            {skillIcons.map((icon) => (
              <div className="skill__box">
                <box-icon
                  className="icon_logo"
                  type="logo"
                  name={icon.name}
                  size="md"
                  color="white"
                ></box-icon>
                <span>{icon.intro}</span>
              </div>
            ))}
          </div> */}

      <div className="skill__marquee__section">
        <Marquee
          gradient={false}
          speed={90}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="skill__marque">
            {skillIcons.map((icon) => (
              <div className="skill__marquee_box">
                <box-icon
                  className="icon__logo"
                  type="logo"
                  name={icon.name}
                  size="md"
                  color="white"
                ></box-icon>
                <span>{icon.intro}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Skills;

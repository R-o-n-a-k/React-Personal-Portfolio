import React from "react";
import Marquee from "react-fast-marquee";
import skillSQL from "../../assets/skills-section/skill-sql.png";
import skillSelenium from "../../assets/skills-section/skill-selenium.png";
import skillEtl from "../../assets/skills-section/skill-etl.png";

function Skills() {
  const skillIcons = [
    { name: "html5", intro: "HTML5" },
    { name: "css3", intro: "CSS3" },
    { name: "javascript", intro: "JavaScript" },
    { name: "react", intro: "React" },
    { name: "nodejs", intro: "Node.Js" },
    { name: "python", intro: "Python" },
    { name: "java", intro: "Java" },
    { name: "flask", intro: "Flask" },
    { name: "c-plus-plus", intro: "C++" },
    { name: "sass", intro: "Sass" },
    { name: "git", intro: "Git" },
    { name: "figma", intro: "Figma" },
    { name: "bootstrap", intro: "BootStrap" },
    { name: "postgresql", intro: "PostgreSQL" },
  ];

  const skillImg = [
    { image: skillSQL, desc: "SQL" },
    { image: skillSelenium, desc: "Selenium" },
    { image: skillEtl, desc: "ETL" },
  ];

  return (
    <>
      <div className="skill__marquee__section">
        <Marquee
          gradient={false}
          speed={120}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="skill__marque">
            {skillIcons.map((icon) => (
              <div className="skill__marquee_box" key={icon.name}>
                <box-icon
                  className="icon__logo"
                  type="logo"
                  name={icon.name}
                  size="md"
                  color="white"
                />
                <span>{icon.intro}</span>
              </div>
            ))}
            {skillImg.map((img) => (
              <div className="skill__marquee_box" key={img.desc}>
                <img className="skill__icon__img" src={img.image} alt="" />
                <span>{img.desc}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Skills;

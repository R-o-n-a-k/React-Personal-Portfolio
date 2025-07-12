import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const Roles = [
  "Full-Stack Developer",
  "Front-End Developer",
  "Senior Software Engineer",
];

const TextTransitionLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Roles.length);
    }, 1400); // Change text every 1.4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h3 className="home__subtitle" data-aos="fade-up">
      <TextTransition springConfig={presets.wobbly}>
        {Roles[index]}
      </TextTransition>
    </h3>
  );
};

export default TextTransitionLoop;

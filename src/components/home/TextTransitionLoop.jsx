import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const Roles = ['Front-End Developer', 'Automation Tester', 'Senior Software Engineer'];

const TextTransitionLoop = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % Roles.length);
      }, 3000); // Change text every 3 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <h3 className="home__subtitle">
        <TextTransition springConfig={presets.wobbly}>
          {Roles[index]}
        </TextTransition>
      </h3>
    );
  };
  
  export default TextTransitionLoop;
  
  
  
  
  
  
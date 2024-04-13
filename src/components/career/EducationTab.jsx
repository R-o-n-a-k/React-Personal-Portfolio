import React from "react";
import { educationData } from "./CareerData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationTab = () => {
  return (
    <div className="tab__content">
      <div className="timeline-container">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {educationData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              iconStyle={{
                background: "var(--accent-primary)",
                color: "var(--bg-color-1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--accent-primary)",
                marginRight: "4px",
              }}
              icon={<i className="fas fa-graduation-cap"></i>}
              contentStyle={{
                background: "var(--accent-primary)",
                color: "var(--bg-color-1)",
              }}
              contentArrowStyle={{
                border: "7px solid var(--accent-primary)",
              }}
            >
              <h3 className="vertical-timeline-element-title">{item.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.name}
              </h4>
              <h5 className="vertical-timeline-element-year">{item.year}</h5>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EducationTab;

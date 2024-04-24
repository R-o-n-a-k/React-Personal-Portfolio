// import React from "react";
import React, { useState, useEffect } from "react";
import { workData } from "./CareerData";

const WorkTab = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="workData__accordion">
      {workData.map((item, index) => (
        <div
          key={index}
          className={`accordion__item ${
            index === expandedIndex ? "expanded" : ""
          }`}
          onClick={() => handleAccordionClick(index)}
        >
          <div className="accordion__header">
            <span className="accordion__company">{item.company}</span>
            <span className="accordion__year">{item.year}</span>
          </div>

          {index === expandedIndex && (
            <div className="accordion__content">
              <span className="accordion__postion">{item.position}</span>
              <ul className="accordian__data__group">
                {item.data.map((dataItem, dataIndex) => (
                  <li className="accordian__content__list" key={dataIndex}>
                    {dataItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkTab;

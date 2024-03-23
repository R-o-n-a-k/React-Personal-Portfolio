import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.ref} className="work__button" target="_blank">
        Check out <i className="fa-solid fa-arrow-right work__button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;

// import React from "react";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectItems = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a className="work__button" target="_blank" onClick={openModal}>
        Show Details
        <i className="fa-solid fa-arrow-right work__button-icon"></i>
      </a>
      {isModalOpen && <ProjectModal item={item} closeModal={closeModal} />}
    </div>
  );
};

export default ProjectItems;

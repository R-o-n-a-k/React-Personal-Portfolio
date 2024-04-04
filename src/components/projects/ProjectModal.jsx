import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ item, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <a className="modal-close" onClick={closeModal}>
          <i className="fa-solid fa-times"></i>
        </a>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>

        <a href={item.ref} target="_blank" rel="noopener noreferrer">
          <button id="checkOut" className="check-out" role="link">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Check out</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;

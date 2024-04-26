import React, { useEffect, useState } from "react";
import ProjectItems from "./ProjectItems";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";

const ProjectsDetail = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  const [isLoadMore, setIsLoadMore] = useState(true);
  const [noOfElement, setNoOfElement] = useState(3);
  const visibleProjects = projects.slice(0, noOfElement);
  const [isAllDisplay, setAllDisplay] = useState(true);

  const loadMore = () => {
    setNoOfElement(projects.length);
    setIsLoadMore(false);
  };

  const loadLess = () => {
    setNoOfElement(3);
    setIsLoadMore(true);
  };

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
      setAllDisplay(true);
    } else {
      const newProjects = projectsData.filter((project) => {
        setAllDisplay(false);
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters" data-aos="fade-up">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {visibleProjects.map((item) => {
          return <ProjectItems item={item} key={item.id} />;
        })}
      </div>
      <div data-aos="fade-up" data-aos-offset="120">
        {isLoadMore ? (
          <button
            className="second__button show__button"
            style={isAllDisplay ? { display: "block" } : { display: "none" }}
            onClick={() => loadMore()}
          >
            {" "}
            <span>Load More</span>
          </button>
        ) : (
          <button
            className="second__button show__button"
            onClick={() => loadLess()}
            style={isAllDisplay ? { display: "block" } : { display: "none" }}
          >
            <span>Load Less</span>
          </button>
        )}
      </div>
    </>
  );
};

export default ProjectsDetail;

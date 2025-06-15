// import React, { useEffect, useState } from "react";
// import ProjectItems from "./ProjectItems";
// import { projectsData, projectsNav } from "./Data";

// const ProjectsDetail = () => {
//   const [item, setItem] = useState({ name: "all" });
//   const [projects, setProjects] = useState([]);
//   const [active, setActive] = useState(0);

//   const [isLoadMore, setIsLoadMore] = useState(true);
//   const [noOfElement, setNoOfElement] = useState(3);
//   const visibleProjects = projects.slice(0, noOfElement);
//   const [isAllDisplay, setAllDisplay] = useState(true);

//   const loadMore = () => {
//     setNoOfElement(projects.length);
//     setIsLoadMore(false);
//   };

//   const loadLess = () => {
//     setNoOfElement(3);
//     setIsLoadMore(true);
//   };

//   useEffect(() => {
//     if (item.name === "all") {
//       setProjects(projectsData);
//       setAllDisplay(true);
//     } else {
//       const newProjects = projectsData.filter((project) => {
//         return project.category.toLowerCase() === item.name;
//       });
//       setAllDisplay(false);
//       setProjects(newProjects);
//     }
//   }, [item]);

//   const handleClick = (e, index) => {
//     setItem({ name: e.target.textContent.toLowerCase() });
//     setActive(index);
//   };

//   return (
//     <>
//       <div className="work__filters" data-aos="fade-up">
//         {projectsNav.map((item, index) => {
//           return (
//             <span
//               onClick={(e) => {
//                 handleClick(e, index);
//               }}
//               className={`${active === index ? "active-work" : ""} work__item`}
//               key={index}
//             >
//               {item.name}
//             </span>
//           );
//         })}
//       </div>

//       <div className="work__container container grid">
//         {visibleProjects.map((item) => {
//           return <ProjectItems item={item} key={item.id} />;
//         })}
//       </div>
//       <div data-aos="fade-up" data-aos-offset="120">
//         {isLoadMore ? (
//           <button
//             className="second__button show__button"
//             style={isAllDisplay ? { display: "block" } : { display: "none" }}
//             onClick={() => loadMore()}
//           >
//             {" "}
//             <span>Load More</span>
//           </button>
//         ) : (
//           <button
//             className="second__button show__button"
//             onClick={() => loadLess()}
//             style={isAllDisplay ? { display: "block" } : { display: "none" }}
//           >
//             <span>Load Less</span>
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProjectsDetail;

import React, { useEffect, useState } from "react";
import ProjectItems from "./ProjectItems";
import { projectsData, projectsNav } from "./Data";

const ProjectsDetail = () => {
  const [projects, setProjects] = useState(projectsData); // initial state
  const [tabBtn, setTabBtn] = useState("all"); // track selected tab
  const [showAll, setShowAll] = useState(false); // toggle show more/less

  // filter projects based on tab
  const filterProjects = (val) => {
    if (val === "all") {
      setProjects(projectsData);
    } else {
      const newData = projectsData.filter((project) => {
        return project.category.toLowerCase() === val;
      });
      setProjects(newData);
    }
  };

  const handleTabClicked = (val) => {
    setTabBtn(val);
    filterProjects(val);
  };

  return (
    <>
      <div className="work__filters" data-aos="fade-up">
        {projectsNav.map((item, index) => (
          <span
            onClick={() => handleTabClicked(item.name.toLowerCase())}
            className={`${
              tabBtn === item.name.toLowerCase() ? "active-work" : ""
            } work__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {(showAll ? projects : projects.slice(0, 3)).map((item) => (
          <ProjectItems item={item} key={item.id} />
        ))}
      </div>

      <div data-aos="fade-up" data-aos-offset="50">
        {projects.length > 3 && (
          <button
            className="second__button show__button"
            onClick={() => setShowAll((prev) => !prev)}
          >
            <span>{showAll ? "Show Less" : "Show All"}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default ProjectsDetail;

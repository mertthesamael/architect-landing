"use client";
import styles from "./style.module.scss";
import React, { FC, useState } from "react";
import ProjectsSlider from "./ProjectsSlider";

interface ProjectsSectionProps {}
const projectCategories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Commercial",
  },
  {
    id: 3,
    name: "Residental",
  },
  {
    id: 4,
    name: "Other",
  },
];
const ProjectsSection: FC<ProjectsSectionProps> = ({}) => {
  const [filter, setFilter] = useState("All");

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsSection__inner}>
        <div className={styles.projectsSection__inner__body}>
          <div className={styles.projectsSection__inner__filter}>
            <h1 className={styles.projectsSection__inner__title}>Projects</h1>
            <ul>
              {projectCategories.map((el, _i) => (
                <li
                  onClick={(e: any) => setFilter(e.target.innerText)}
                  className={el.name === filter ? styles.active : ""}
                >
                  <i style={el.name === filter ? {} : { display: "none" }} />
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.projectsSection__inner__slider}>
            <ProjectsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

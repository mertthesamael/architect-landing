import ProjectCard from '@/components/Cards/ProjectCard';
import styles from './style.module.scss'
import React, { FC } from 'react'
import ProjectsSlider from './ProjectsSlider';

interface ProjectsSectionProps {
  
}

const ProjectsSection: FC<ProjectsSectionProps> = ({  }) => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsSection__inner}>
          <h1 className={styles.projectsSection__inner__title}>Projects</h1>
          <div className={styles.projectsSection__inner__body}>

        <div className={styles.projectsSection__inner__filter}>
          <ul>
            <li>All</li>
            <li>Commercial</li>
            <li>Residental</li>
            <li>Other</li>
          </ul>
        </div>
        <div className={styles.projectsSection__inner__slider}>
          <ProjectsSlider/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;
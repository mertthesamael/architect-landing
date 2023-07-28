import Image from 'next/image';
import styles from './style.module.scss'
import bg from "@/assets/projects/projects2.jpg"

import React, { FC } from 'react'

interface ProjectCardProps {
  
}

const ProjectCard: FC<ProjectCardProps> = ({  }) => {
  return (
    <div className={styles.projectCard}>
     <Image src={bg} alt='Project Image' fill style={{objectFit:'cover'}}/>
     <div className={styles.projectCard__footer}>
        <h1><strong>Wish Stone Building</strong></h1>
        <p>2972 Westheimer Rd. Santa Ana, Illinois </p>
     </div>
    </div>
  )
}

export default ProjectCard;
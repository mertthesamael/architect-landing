import Image from 'next/image';
import styles from './style.module.scss'

import React, { FC } from 'react'

interface ProjectCardProps {
  id:number,
  name:string,
  address:string,
  img:any
}

const ProjectCard: FC<ProjectCardProps> = ({ id,name,address,img }) => {
  return (
    <div className={styles.projectCard}>
     <Image src={img} alt='Project Image' fill style={{objectFit:'cover'}}/>
     <div className={styles.projectCard__footer}>
        <h1>{name}</h1>
        <p>{address}</p>
     </div>
    </div>
  )
}

export default ProjectCard;
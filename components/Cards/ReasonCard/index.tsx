import Image from 'next/image';
import styles from './style.module.scss'




import React, { FC } from 'react'

interface ReasonCardProps {
  id:number,
  title:string,
  img:JSX.Element,
  content:string
}

const ReasonCard: FC<ReasonCardProps> = (
{
id,
title,
img,
content  }
) => {
  return (
    <div className={styles.reasonCard}>
        {img}
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default ReasonCard;
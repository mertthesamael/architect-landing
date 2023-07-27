import styles from './style.module.scss'
import React, { FC } from 'react'

interface ServiceCardProps {
  id:number,
  icon:JSX.Element,
  title:string
}

const ServiceCard: FC<ServiceCardProps> = ({ id,icon,title }) => {
  return (
    <div className={styles.serviceCard} style={id%2!==0?{background:'white'}:{background:'#2947A9'}}>
        {icon}
        <hr/>
        <h2 style={id%2===0?{color:'white'}:{color:'#2947A9'}}>{title}</h2>
    </div>
  )
}

export default ServiceCard;
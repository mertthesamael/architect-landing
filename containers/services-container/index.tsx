import ServiceCard from '@/components/Cards/ServiceCard';
import styles from './style.module.scss'
import React, { FC } from 'react'
import { Services } from './constants';

interface ServicesSectionProps {
  
}

const ServicesSection: FC<ServicesSectionProps> = ({  }) => {
  return (
    <section className={styles.servicesSection}>
        <h1>Services</h1>
     <div className={styles.servicesSection__services}>
        {Services.map((el, _i) => <ServiceCard key={_i} id={el.id} title={el.title} icon={el.icon}/>)}
     </div>
    </section>
  )
}

export default ServicesSection;
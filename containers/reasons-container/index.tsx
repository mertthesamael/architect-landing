import ReasonCard from '@/components/Cards/ReasonCard';
import styles from './style.module.scss'





import React, { FC } from 'react'
import { ruler } from '@/services/Icons/svgIcons';
import { Reasons } from './constants';

interface ReasonsSectionProps {
  
}

const ReasonsSection: FC<ReasonsSectionProps> = ({  }) => {
  return (
    <section className={styles.reasonSection}>
        <div className={styles.reasonSection__title}>
            <h1>Our Reputation</h1>
        </div>
        <div className={styles.reasonSection__reasons}>
            {Reasons.map((el, _i) => <ReasonCard key={_i} img={el.img} title={el.title} content={el.content} id={el.id}/>)}
        </div>
    </section>
  )
}

export default ReasonsSection;
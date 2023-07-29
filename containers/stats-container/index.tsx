"use client"
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import styles from './style.module.scss'
import React, { FC } from 'react'
import StatCard from '@/components/Cards/StatCard';
import { Stats } from './constants';
import SecondaryButton from '@/components/Buttons/SecondaryButton';

interface StatsSectionProps {
  
}

const StatsSection: FC<StatsSectionProps> = ({  }) => {
  return (
    <section className={styles.statsSection}>
    <div className={styles.statsSection__inner}>
        <div className={styles.statsSection__inner__cards}>
            {Stats.map((el,_i) => <StatCard id={el.id} img={el.img} count={el.count} stat={el.stat} imgPosition={el.imgPos} />)}
        </div>
        <div className={styles.statsSection__inner__info}>
            <h1>30 Years Experience</h1>
            <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
            <SecondaryButton text='Contact Us'/>
        </div>
    </div>
    </section>
  )
}

export default StatsSection;
import styles from './style.module.scss'
import Image from 'next/image';
import React, { FC } from 'react'
import hero from "@/assets/hero.png"

// Import Swiper styles
import HeroSlider from './HeroSlider';
interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({  }) => {
  return (
    <section id='home' className={styles.heroSection}>
        <Image src={hero} alt='' fill style={{objectFit:'cover'}}/>
        <div className={styles.heroSection__inner}>
            <div className={styles.heroSection__inner__title}>
                <h1>Building things is our mission.</h1>
            </div>
        </div>
        <div className={styles.heroSection__inner__featured}>
            <HeroSlider>
            </HeroSlider>
        </div>
    </section>
  )
}

export default HeroSection;
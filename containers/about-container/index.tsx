import Image from 'next/image';
import styles from './style.module.scss'
import infoBg from "@/assets/infobg.jpg"
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';

interface AboutSectionProps {
  
}

const AboutSection: FC<AboutSectionProps> = ({  }) => {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.aboutSection__inner}>
            <div className={styles.aboutSection__inner__img}>
                <Image src={infoBg} alt='Info Image' fill style={{objectFit:'cover'}}/>
            </div>
            <div className={styles.aboutSection__inner__info}>
                <div className={styles.aboutSection__inner__info__title}>
                    <h2>About us</h2>
                </div>
                <div className={styles.aboutSection__inner__info__content}>
                    <p>For more than 30 years we have been delivering world-class construction and we've built many lasting relationships along the way.
                    <br/>
                    <br/>
                    We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                </div>
                <div className={styles.aboutSection__inner__info__button}>
                    <PrimaryButton text='More on Our History'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;
import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import banner from '@/assets/banner.png'
import SecondaryButton from '@/components/Buttons/SecondaryButton';
interface BannerSectionProps {
  
}

const BannerSection: FC<BannerSectionProps> = ({  }) => {
  return (
    <section className={styles.bannerSection}>
        <Image src={banner} alt='Banner' fill style={{objectFit:'cover'}} />
        <div className={styles.bannerSection__inner}>
            <div className={styles.bannerSection__inner__text}>
                <h3>Free consultation with exceptional quality</h3>
                <p>Just one call away: +84 1102 2703</p>
            </div>
            <div>
                <SecondaryButton regular text='Get your consultation'/>
            </div>
        </div>
    </section>
  )
}

export default BannerSection;
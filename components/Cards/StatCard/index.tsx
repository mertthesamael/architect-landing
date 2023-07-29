import Image from 'next/image'
import styles from './style.module.scss'
import CountUp from 'react-countup';

import React, { FC } from 'react'

interface StatCardProps {
  id:number,
  img:any,
  count:number,
  stat:string,
  imgPosition : 'topLeft'|'topRight'|'bottomLeft'|'bottomRight'
}
const StatCard: FC<StatCardProps> = ({ id,img,count,stat,imgPosition }) => {

    const imgPositionStyles = {
        topLeft:{top:'-2rem',left:'-2rem'},
        topRight:{top:'-2rem',right:'-2rem'},
        bottomLeft:{bottom:'-2rem',left:'-2rem'},
        bottomRight:{bottom:'-3rem',right:'-2rem'},
    }
  return (
    <div className={styles.statCard}>
        <Image src={img} alt='Stat Image' style={imgPositionStyles[imgPosition]}/>
        <div className={styles.statCard__count}>
            <span>{<CountUp  enableScrollSpy scrollSpyOnce  end={count} duration={1} />}</span>
        </div>
        <div className={styles.statCard__stat}>
            <hr/>
            <p>{stat}</p>
        </div>
    </div>
  )
}

export default StatCard;
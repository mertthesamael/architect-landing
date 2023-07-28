import styles from './style.module.scss'
import React, { FC } from 'react'

interface SecondaryButtonProps {
  text:string
  regular?:boolean
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ text,regular }) => {
  return (
    <button style={regular?{background:'transparent',border:'1px solid white'}:{}} className={styles.secondaryButton}>{text}</button>
  )
}

export default SecondaryButton;





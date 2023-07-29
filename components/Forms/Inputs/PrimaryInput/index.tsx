import styles from './style.module.scss'
import React, { FC } from 'react'

interface PriamryInputProps {
    type:'text'|'textarea',
    placeholder:string
}

const PriamryInput: FC<PriamryInputProps> = ({ type,placeholder }) => {
    if(type==='textarea'){
        return(
            <textarea placeholder={placeholder} className={styles.primaryTextarea}></textarea>
        )
    }
  return (
    <input  placeholder={placeholder} className={styles.primaryInput}/>
    )}

export default PriamryInput;
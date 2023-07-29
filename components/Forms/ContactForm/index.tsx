import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PriamryInput from '../Inputs/PrimaryInput';
import styles from './style.module.scss'
import React, { FC } from 'react'
import SecondaryButton from '@/components/Buttons/SecondaryButton';

interface ContactFormProps {
  
}

const ContactForm: FC<ContactFormProps> = ({  }) => {
  return (
    <form className={styles.contactForm}>
        <div className={styles.contactForm__upper}>
            <PriamryInput placeholder='Your Name*' type='text' />
            <PriamryInput placeholder='Email*' type='text' />
            <PriamryInput placeholder='Reason for Contacting*' type='text' />
            <PriamryInput placeholder='Phone' type='text' />
        </div>
        <div className={styles.contactForm__bottom}>
            <PriamryInput placeholder='Message' type='textarea'/>
        </div>
        <span>* indicates a required field</span>
        <div className={styles.contactForm__submit}>
            <SecondaryButton text='Submit'/>
        </div>
    </form>
  )
}

export default ContactForm;
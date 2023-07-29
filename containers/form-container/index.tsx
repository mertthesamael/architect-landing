import ContactForm from '@/components/Forms/ContactForm';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface FormSectionProps {
  
}

const FormSection: FC<FormSectionProps> = ({  }) => {
  return (
    <section className={styles.formSection}>
      <div className={styles.formSection__inner}>
      <div className={styles.formSection__text}>
        <h2>What can us do for you?</h2>
        <p>We are ready to work on a project of any complexity, whether it's commercial or residential.</p>
      </div>
      <div className={styles.formSection__form}>
        <ContactForm />
      </div>
      </div>
    </section>
  )
}

export default FormSection;
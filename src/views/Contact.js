import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import guitar from '../assets/images/guitar.jpg'
import './Contact.scss'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className='view contact'>
      <h1 className='title'>{t('Contact.title')}</h1>

      <address>
        <a href='mailto:charles.perrono@gmail.com'>
          <FontAwesomeIcon icon={faAt} />
          charles.perrono@gmail.com
        </a>
        <a href='https://www.linkedin.com/in/charles-perrono/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
          charles-perrono
        </a>
      </address>

      <img src={guitar} alt='' />

    </div>
  )
}

export default Contact

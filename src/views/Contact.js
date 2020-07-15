import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Contact.scss'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className='view contact'>
      <h1 className='title'>{t('Contact.title')}</h1>

      <address>
        <div>{t('Contact.general')} <a href='mailto:contact@karlkmusic.com'>contact@karlkmusic.com</a></div>
        <div>{t('Contact.license')} <a href='mailto:sync@karlkmusic.com'>sync@karlkmusic.com</a></div>
        <div>{t('Contact.booking')} <a href='mailto:booking@karlkmusic.com'>booking@karlkmusic.com</a></div>
        <div>
          <a href='https://www.linkedin.com/in/charles-perrono/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
            charles-perrono
          </a>
        </div>
      </address>
    </div>
  )
}

export default Contact

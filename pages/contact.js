import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'

const Contact = ({ preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  return (
    <Layout preview={preview}>
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
    </Layout>
  )
}

Contact.propTypes = {
  preview: PropTypes.bool
}

export default Contact

export const getStaticProps = async ({ preview = false }) => {
  return {
    props: {
      preview
    }
  }
}

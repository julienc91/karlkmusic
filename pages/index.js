import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'

const Index = ({ preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  return (
    <Layout preview={preview}>
      <div className='view home'>
        <h1 className='title'>{t('Home.title')}</h1>
        <h2 className='subtitle'>{t('Home.subtitle')}</h2>
      </div>
    </Layout>
  )
}

Index.propTypes = {
  preview: PropTypes.bool
}

export default Index

export const getStaticProps = async ({ preview = false }) => {
  return {
    props: {
      preview
    }
  }
}

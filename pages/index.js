import React from 'react'
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

export default Index

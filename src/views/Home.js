import React from 'react'
import { useTranslation } from 'react-i18next'
import './Home.scss'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div className='view home'>
      <h1 className='title'>{t('Home.title')}</h1>
      <h2 className='subtitle'>{t('Home.subtitle')}</h2>
    </div>
  )
}

export default Home

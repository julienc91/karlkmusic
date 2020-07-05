import React from 'react'
import { useTranslation } from 'react-i18next'
import Advertisment from '../components/Advertisment'
import db from '../assets/db.json'
import './Advertisments.scss'

const Advertisments = () => {
  const { t } = useTranslation()
  return (
    <div className='view'>
      <h1 className='title'>{t('Advertisments.title')}</h1>

      <div className='aditems'>
        {db.advertisments.map((advertisment, i) => (
          <Advertisment key={i} advertisment={advertisment} />
        ))}
      </div>
    </div>
  )
}

export default Advertisments

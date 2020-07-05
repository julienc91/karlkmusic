import React from 'react'
import { useTranslation } from 'react-i18next'
import './Biography.scss'
import image from '../assets/images/charles_perrono.jpg'

const Biography = () => {
  const { t } = useTranslation()
  return (
    <div className='view biography'>
      <h1 className='title'>{t('Biography.title')}</h1>

      <img src={image} alt={t('Biography.image_alt')} />
      <article>
        <p>{t('Biography.part1')}</p>
        <p>{t('Biography.part2')}</p>
        <p>{t('Biography.part3')}</p>
        <p>{t('Biography.part4')}</p>
      </article>
    </div>
  )
}

export default Biography

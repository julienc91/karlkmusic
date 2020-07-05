import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import TrackList from '../components/TrackList'
import db from '../assets/db.json'
import './Discography.scss'

const Discography = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(null)

  return (
    <div className='view discography'>
      <h1 className='title'>{t('Discography.title')}</h1>

      {db.discography.map(data => (
        <section key={data.year}>
          <h3>{data.year}</h3>
          <TrackList tracks={data.tracks} active={(active && active[0] === data.year) ? active[1] : undefined} onChangeActive={i => {
            const isActive = active && active[0] === data.year && active[1] === i
            setActive(isActive ? null : [data.year, i])
          }}/>
        </section>
      ))}

    </div>
  )
}

export default Discography

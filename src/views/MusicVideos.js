import React from 'react'
import { useTranslation } from 'react-i18next'
import Video from '../components/Video'
import db from '../assets/db.json'
import './Soundtracks.scss'

const MusicVideos = () => {
  const { t } = useTranslation()
  return (
    <div className='view'>
      <h1 className='title'>{t('MusicVideos.title')}</h1>

      <div className='video-list'>
        {db.music_videos.map((video, i) => (
          <Video key={i} video={video} />
        ))}
      </div>
    </div>
  )
}

export default MusicVideos

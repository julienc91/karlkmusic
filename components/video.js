import React from 'react'
import YouTube from 'react-youtube'
import { TypeVideo } from '../types'

const Video = props => {
  const { video } = props
  return (
    <section className='video'>
      <h3>{video.title} ({(new Date(video.date)).getFullYear()})</h3>
      <div className='youtube-container'>
        <YouTube videoId={video.videoId} opts={{ width: 800 }}/>
      </div>
    </section>
  )
}

Video.propTypes = {
  video: TypeVideo.isRequired
}

export default Video

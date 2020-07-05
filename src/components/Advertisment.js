import React from 'react'
import YouTube from 'react-youtube'
import { TypeAdvertisment } from '../types'
import './Advertisment.scss'

const Advertisment = props => {
  const { advertisment } = props
  // don' use "advertisment" or similar name for class names, as adblockers would hide their content...
  return (
    <section className='aditem'>
      <h3>{advertisment.title} ({advertisment.year})</h3>
      <div className='youtube-container'>
        <YouTube videoId={advertisment.videoId} opts={{ width: 800 }}/>
      </div>
    </section>
  )
}

Advertisment.propTypes = {
  advertisment: TypeAdvertisment.isRequired
}

export default Advertisment

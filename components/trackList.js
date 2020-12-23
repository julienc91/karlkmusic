import React from 'react'
import PropTypes from 'prop-types'
import Track from './track'
import { TypeTrack } from '../types'

const TrackList = props => {
  const { active, tracks, onChangeActive } = props

  return (
    <div className='track-list'>
      {tracks.map((track, i) => (
        <Track key={i} track={track} active={active === i} onClick={() => onChangeActive(i)} />
      ))}
      <div className='padding-item' />
      <div className='padding-item' />
      <div className='padding-item' />
      <div className='padding-item' />
    </div>
  )
}

TrackList.propTypes = {
  active: PropTypes.number,
  tracks: PropTypes.arrayOf(TypeTrack).isRequired,
  onChangeActive: PropTypes.func.isRequired
}

export default TrackList

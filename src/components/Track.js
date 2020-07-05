import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAmazon,
  faApple,
  faDeezer,
  faGooglePlay,
  faSoundcloud,
  faSpotify,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { TypeTrack } from '../types'
import './Track.scss'

const assets = require.context('../assets/images/thumbnails/')
const PLATFORMS_TO_ICON = {
  amazonmusic: faAmazon,
  applemusic: faApple,
  deezer: faDeezer,
  googleplay: faGooglePlay,
  soundcloud: faSoundcloud,
  spotify: faSpotify,
  youtube: faYoutube
}
const PLATFORM_ORDER = ['youtube', 'spotify', 'deezer', 'applemusic', 'amazonmusic', 'googleplay', 'soundcloud']

const Track = props => {
  const { active, track, onClick } = props
  const { artist, links, thumbnail, title } = track
  const { t } = useTranslation()

  let image
  try {
    image = assets(`./${thumbnail}`)
  } catch (_) {
    image = assets('./default.png')
  }

  return (
    <>
      <div className={'track' + (active ? ' active' : '')}>
        <img src={image} alt={`${artist} - ${title}`} onClick={onClick} />
        <div className='arrow-down' />
        <div className='track-detail'>
          {active && (
            <>
              <h3>{artist} - {title}</h3>
              {links && Object.keys(links).length > 0 && (
                <>
                  {t('Track.availability')}
                  <ul className='links'>
                    {PLATFORM_ORDER.filter(platform => !!links[platform]).map(platform => {
                      if (!links[platform]) {
                        return null
                      }
                      return (
                        <li key={platform}>
                          <a href={links[platform]} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={PLATFORMS_TO_ICON[platform]} />
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

Track.propTypes = {
  active: PropTypes.bool,
  track: TypeTrack.isRequired,
  onClick: PropTypes.func
}

export default Track

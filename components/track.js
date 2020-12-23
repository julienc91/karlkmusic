import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAmazon,
  faApple,
  faBandcamp,
  faDeezer,
  faSoundcloud,
  faSpotify,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { useIntl } from 'react-intl'
import { TypeTrack } from '../types'

const PLATFORMS_TO_ICON = {
  amazonMusic: faAmazon,
  appleMusic: faApple,
  bandcamp: faBandcamp,
  deezer: faDeezer,
  soundcloud: faSoundcloud,
  spotify: faSpotify,
  youtube: faYoutube
}
const PLATFORM_ORDER = ['spotify', 'youtube', 'appleMusic', 'soundcloud', 'bandcamp', 'deezer', 'amazonMusic']

const Track = props => {
  const { active, track, onClick } = props
  const { artist, thumbnail, title } = track
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })

  let image = thumbnail?.url
  if (!image) {
    image = '/assets/images/default.png'
  }

  return (
    <>
      <div className={'track' + (active ? ' active' : '')}>
        <img src={`${image}?w=280&h=280`} alt={`${artist} - ${title}`} onClick={onClick} />
        <div className='arrow-down' />
        <div className='track-detail'>
          {active && (
            <>
              <h3>{artist} - {title}</h3>
              {PLATFORM_ORDER.some(platform => track[platform]) && (
                <>
                  {t('Track.availability')}
                  <ul className='links'>
                    {PLATFORM_ORDER.map(platform => {
                      if (!track[platform]) {
                        return null
                      }
                      return (
                        <li key={platform}>
                          <a href={track[platform]} target='_blank' rel='noopener noreferrer'>
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

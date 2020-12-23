import PropTypes from 'prop-types'

export const TypeTrack = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  amazonMusic: PropTypes.string,
  appleMusic: PropTypes.string,
  bandcamp: PropTypes.string,
  deezer: PropTypes.string,
  soundcloud: PropTypes.string,
  spotify: PropTypes.string,
  youtube: PropTypes.string
})

export const TypeVideo = PropTypes.shape({
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
})

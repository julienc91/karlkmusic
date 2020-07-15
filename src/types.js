import PropTypes from 'prop-types'

export const TypeTrack = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string
})

export const TypeVideo = PropTypes.shape({
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
})

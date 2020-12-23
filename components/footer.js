import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBandcamp,
  faDeezer,
  faFacebook,
  faInstagram,
  faItunes,
  faSoundcloud,
  faSpotify,
  faTiktok,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <a href='https://www.instagram.com/karlkmusic'><FontAwesomeIcon icon={faInstagram} /></a>
      <a href='https://www.facebook.com/karlkmusic'><FontAwesomeIcon icon={faFacebook} /></a>
      <a href='https://twitter.com/karlkmusic'><FontAwesomeIcon icon={faTwitter} /></a>
      <a href='https://spoti.fi/2teTUBq'><FontAwesomeIcon icon={faSpotify} /></a>
      <a href='https://itunes.apple.com/fr/artist/karlk/946907126'><FontAwesomeIcon icon={faItunes} /></a>
      <a href='https://www.youtube.com/c/Karlkmusic'><FontAwesomeIcon icon={faYoutube} /></a>
      <a href='https://soundcloud.com/karlkmusic'><FontAwesomeIcon icon={faSoundcloud} /></a>
      <a href='https://karlkmusic.bandcamp.com/'><FontAwesomeIcon icon={faBandcamp} /></a>
      <a href='https://www.tiktok.com/@karlkmusic'><FontAwesomeIcon icon={faTiktok} /></a>
      <a href='https://bit.ly/2GjnbBG'><FontAwesomeIcon icon={faDeezer} /></a>
    </footer>
  )
}

export default Footer

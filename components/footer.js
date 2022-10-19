import React from 'react'
import {
  FaBandcamp,
  FaDeezer,
  FaFacebook,
  FaInstagram,
  FaItunes,
  FaSoundcloud,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='https://www.instagram.com/karlkmusic'><FaInstagram /></a>
      <a href='https://www.facebook.com/karlkmusic'><FaFacebook /></a>
      <a href='https://twitter.com/karlkmusic'><FaTwitter /></a>
      <a href='https://spoti.fi/2teTUBq'><FaSpotify /></a>
      <a href='https://itunes.apple.com/fr/artist/karlk/946907126'><FaItunes /></a>
      <a href='https://www.youtube.com/c/Karlkmusic'><FaYoutube /></a>
      <a href='https://soundcloud.com/karlkmusic'><FaSoundcloud /></a>
      <a href='https://karlkmusic.bandcamp.com/'><FaBandcamp /></a>
      <a href='https://www.tiktok.com/@karlkmusic'><FaTiktok /></a>
      <a href='https://bit.ly/2GjnbBG'><FaDeezer /></a>
    </footer>
  )
}

export default Footer

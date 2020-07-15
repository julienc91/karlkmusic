import Biography from './Biography'
import Contact from './Contact'
import Discography from './Discography'
import Home from './Home'
import MusicVideos from './MusicVideos'
import Soundtracks from './Soundtracks'
import './index.scss'

export const homepageUrl = '/'

const pagesMapping = [
  { Component: Home, name: 'home', url: homepageUrl },
  { Component: Discography, name: 'discography', url: '/discographie' },
  { Component: Soundtracks, name: 'soundtracks', url: '/bandes-sons' },
  { Component: MusicVideos, name: 'music_videos', url: '/videoclips' },
  { Component: Biography, name: 'biography', url: '/biographie' },
  { Component: Contact, name: 'contact', url: '/contact' }
]

export default pagesMapping

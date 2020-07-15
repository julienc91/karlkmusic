import Biography from './Biography'
import Contact from './Contact'
import Discography from './Discography'
import Soundtracks from './Soundtracks'
import Home from './Home'
import './index.scss'

export const homepageUrl = '/'

const pagesMapping = [
  { Component: Home, name: 'home', url: homepageUrl },
  { Component: Discography, name: 'discography', url: '/discographie' },
  { Component: Soundtracks, name: 'soundtracks', url: '/bandes-sons' },
  { Component: Biography, name: 'biography', url: '/biographie' },
  { Component: Contact, name: 'contact', url: '/contact' }
]

export default pagesMapping

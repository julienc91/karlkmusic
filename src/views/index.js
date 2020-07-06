import Advertisments from './Advertisments'
import Biography from './Biography'
import Contact from './Contact'
import Discography from './Discography'
import Home from './Home'
import './index.scss'

export const homepageUrl = '/'

const pagesMapping = [
  { Component: Home, name: 'home', url: homepageUrl },
  { Component: Biography, name: 'biography', url: '/biographie' },
  { Component: Discography, name: 'discography', url: '/discographie' },
  { Component: Advertisments, name: 'advertisments', url: '/publicites' },
  { Component: Contact, name: 'contact', url: '/contact' }
]

export default pagesMapping

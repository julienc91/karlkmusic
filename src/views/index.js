import Advertisments from './Advertisments'
import Biography from './Biography'
import Contact from './Contact'
import Discography from './Discography'
import Home from './Home'
import './index.scss'

export const homepageUrl = `${process.env.PUBLIC_URL}/`

const pagesMapping = [
  { Component: Home, name: 'home', url: homepageUrl },
  { Component: Biography, name: 'biography', url: `${process.env.PUBLIC_URL}/biographie` },
  { Component: Discography, name: 'discography', url: `${process.env.PUBLIC_URL}/discographie` },
  { Component: Advertisments, name: 'advertisments', url: `${process.env.PUBLIC_URL}/publicites` },
  { Component: Contact, name: 'contact', url: `${process.env.PUBLIC_URL}/contact` },
]

export default pagesMapping

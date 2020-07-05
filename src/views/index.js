import Advertisments from './Advertisments'
import Biography from './Biography'
import Contact from './Contact'
import Discography from './Discography'
import Home from './Home'
import './index.scss'

export const homepageUrl = `${process.env.PUBLIC_URL}/`

const pagesMapping = {
  [homepageUrl]: Home,
  [`${process.env.PUBLIC_URL}/biographie`]: Biography,
  [`${process.env.PUBLIC_URL}/discographie`]: Discography,
  [`${process.env.PUBLIC_URL}/publicites`]: Advertisments,
  [`${process.env.PUBLIC_URL}/contact`]: Contact
}

export default pagesMapping

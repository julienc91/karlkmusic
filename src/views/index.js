import Advertisments from './Advertisments'
import Biography from './Biography'
import Contact from './Contact'
import Discography from './Discography'
import Home from './Home'
import './index.scss'

const pagesMapping = {
  '/': Home,
  '/biographie': Biography,
  '/discographie': Discography,
  '/publicites': Advertisments,
  '/contact': Contact
}

export default pagesMapping

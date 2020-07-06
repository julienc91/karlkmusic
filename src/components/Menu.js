import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import pagesMapping, { homepageUrl } from '../views'
import logo from '../assets/images/logo.png'
import './Menu.scss'

const Menu = () => {
  const { t } = useTranslation()
  return (
    <nav>
      <NavLink className='link-home' to={homepageUrl} exact>
        <img src={logo} alt={t('Menu.home')} />
      </NavLink>
      <ul className='links'>
        {pagesMapping.filter(({ url }) => url !== homepageUrl).map(({ name, url }) => (
          <li className='link-item' key={name}>
            <NavLink className='link' to={url} exact>{t(`Menu.${name}`)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu

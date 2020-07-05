import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import pagesMapping from '../views'
import logo from '../assets/images/logo.png'
import './Menu.scss'

const Menu = () => {
  const { t } = useTranslation()
  return (
    <nav>
      <NavLink className='link-home' to='/' exact>
        <img src={logo} alt={t('Menu.home')} />
      </NavLink>
      <ul className='links'>
        {Object.entries(pagesMapping).filter(([path, _]) => path !== '/').map(([path, Component]) => (
          <li className='link-item' key={path}>
            <NavLink className='link' to={path} exact>{t(`Menu.${Component.name.toLowerCase()}`)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu

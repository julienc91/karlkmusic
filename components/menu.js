import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

const pages = [
  { name: 'discography', url: '/discographie' },
  { name: 'soundtracks', url: '/bandes-sons' },
  { name: 'music_videos', url: '/videoclips' },
  { name: 'biography', url: '/biographie' },
  { name: 'contact', url: '/contact' }
]

const Menu = ({ preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  const { asPath } = useRouter()

  const img = preview ? '/assets/images/preview.png' : '/assets/images/logo.png'
  const url = preview ? '/api/exit-preview' : '/'

  return (
    <nav className={preview ? 'preview' : ''}>
      <ul className='links'>
        {pages.map(({ name, url }) => (
          <li className={'link-item' + (asPath === url ? ' active' : '')} key={name}>
            <Link href={url}>{t(`Menu.${name}`)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Menu.propTypes = {
  preview: PropTypes.bool
}

export default Menu

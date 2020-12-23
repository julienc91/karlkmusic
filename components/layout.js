import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Meta from '../components/meta'

const Layout = ({ children, preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  return (
    <>
      <Meta />
      <Head>
        <title>{t('Global.title')}</title>
      </Head>
      <Menu preview={preview} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  preview: PropTypes.bool
}

export default Layout

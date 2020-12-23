import React from 'react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import * as locales from '../locales'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const { locale, defaultLocale } = router

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={locales[locale]}
    >
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp

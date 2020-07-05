import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Menu from './Menu'
import Spinner from './Spinner'

const Page = props => {
  const { children } = props
  return (
    <Suspense fallback={<Spinner />}>
      <Title />
      <Menu />
      {children}
    </Suspense>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired
}

const Title = () => {
  const { t } = useTranslation()
  document.title = t('Global.title')
  return null
}

export default Page

import React from 'react'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'
import { getBiography } from '../lib/api'
import { TypeBiography } from '../types'

const Biography = ({ biography, preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  return (
    <Layout preview={preview}>
      <div className='view biography'>
        <h1 className='title'>{t('Biography.title')}</h1>

        <img src={`${biography.image.url}?w=350`} alt={biography.image.title} />
        <article>
          {documentToReactComponents(biography.content.json, {})}
        </article>
      </div>
    </Layout>
  )
}

Biography.propTypes = {
  biography: TypeBiography.isRequired,
  preview: PropTypes.bool
}

export default Biography

export const getStaticProps = async ({ locale, preview = false }) => {
  const biography = await getBiography(locale, preview)
  return {
    props: {
      biography,
      preview
    }
  }
}

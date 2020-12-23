import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'
import TrackList from '../components/trackList'
import { getDiscography } from '../lib/api'
import { TypeTrack } from '../types'

const Discography = ({ discography, preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  const [active, setActive] = useState(null)

  const tracksByYear = {}
  discography.forEach(track => {
    const date = new Date(track.date)
    const year = date.getFullYear()
    if (!tracksByYear[year]) {
      tracksByYear[year] = []
    }
    tracksByYear[year].push(track)
  })

  const allYears = Object.keys(tracksByYear)
  allYears.sort()
  allYears.reverse()

  return (
    <Layout preview={preview}>
      <div className='view discography'>
        <h1 className='title'>{t('Discography.title')}</h1>

        {allYears.map(year => (
          <section key={year}>
            <h3>{year}</h3>
            <TrackList tracks={tracksByYear[year]} active={(active && active[0] === year) ? active[1] : undefined} onChangeActive={i => {
              const isActive = active && active[0] === year && active[1] === i
              setActive(isActive ? null : [year, i])
            }}/>
          </section>
        ))}

      </div>
    </Layout>
  )
}

Discography.propTypes = {
  discography: PropTypes.arrayOf(TypeTrack).isRequired,
  preview: PropTypes.bool
}

export default Discography

export const getStaticProps = async ({ locale, preview = false }) => {
  const discography = await getDiscography(locale, preview)
  return {
    props: {
      preview,
      discography
    }
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'
import Video from '../components/video'
import { getSoundtracks } from '../lib/api'
import { TypeVideo } from '../types'

const Soundtracks = ({ soundtracks, preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  return (
    <Layout preview={preview}>
      <div className='view'>
        <h1 className='title'>{t('Soundtracks.title')}</h1>

        <div className='video-list'>
          {soundtracks.map((video, i) => (
            <Video key={i} video={video} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

Soundtracks.propTypes = {
  soundtracks: PropTypes.arrayOf(TypeVideo).isRequired,
  preview: PropTypes.bool
}

export default Soundtracks

export const getStaticProps = async ({ locale, preview = false }) => {
  const soundtracks = await getSoundtracks(locale, preview)
  return {
    props: {
      soundtracks,
      preview
    }
  }
}

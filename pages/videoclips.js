import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'
import Video from '../components/video'
import { getMusicVideos } from '../lib/api'
import { TypeVideo } from '../types'

const MusicVideos = ({ musicVideos, preview }) => {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })
  return (
    <Layout preview={preview}>
      <div className='view'>
        <h1 className='title'>{t('MusicVideos.title')}</h1>

        <div className='video-list'>
          {musicVideos.map((video, i) => (
            <Video key={i} video={video} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

MusicVideos.propTypes = {
  musicVideos: PropTypes.arrayOf(TypeVideo).isRequired,
  preview: PropTypes.bool
}

export default MusicVideos

export const getStaticProps = async ({ locale, preview = false }) => {
  const musicVideos = await getMusicVideos(locale, preview)
  return {
    props: {
      musicVideos,
      preview
    }
  }
}

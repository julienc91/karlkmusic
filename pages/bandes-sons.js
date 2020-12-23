import React from 'react'
import { useIntl } from 'react-intl'
import Layout from '../components/layout'
import Video from '../components/video'
import { getSoundtracks } from '../lib/api'

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

export default Soundtracks

export const getStaticProps = async ({ locale, preview }) => {
  const soundtracks = await getSoundtracks(locale, preview)
  return {
    props: {
      soundtracks,
      preview
    }
  }
}

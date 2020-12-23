const CONTENTFUL_SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
const GRAPHQL_API_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE}`

const fetchAPI = async (query, variables = {}) => {
  const token = (variables && variables.preview) ? CONTENTFUL_PREVIEW_ACCESS_TOKEN : CONTENTFUL_ACCESS_TOKEN
  const res = await fetch(
    GRAPHQL_API_URL,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ query, variables })
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export const getDiscography = async (locale, preview = false) => {
  const data = await fetchAPI(`
    query($locale: String, $preview: Boolean) {
      discographyCollection(locale: $locale, order: date_DESC, preview: $preview) {
        items {
          artist
          title
          date
          thumbnail {
            url
          }
          amazonMusic
          appleMusic
          bandcamp
          deezer
          soundcloud
          spotify
          youtube
        }
      }
    }
  `, { locale, preview })
  return data?.discographyCollection?.items
}

export const getSoundtracks = async (locale, preview = false) => {
  const data = await fetchAPI(`
    query($locale: String, $preview: Boolean) {
      soundtrackCollection(locale: $locale, order: date_DESC, preview: $preview) {
        items {
          title
          date
          videoId
        }
      }
    }
  `, { locale, preview })
  return data?.soundtrackCollection?.items
}

export const getMusicVideos = async (locale, preview = false) => {
  const data = await fetchAPI(`
    query($locale: String, $preview: Boolean) {
      musicVideoCollection(locale: $locale, order: date_DESC, preview: $preview) {
        items {
          title
          date
          videoId
        }
      }
    }
  `, { locale, preview })
  return data?.musicVideoCollection?.items
}

export const getBiography = async (locale, preview = false) => {
  const data = await fetchAPI(`
    query($locale: String, $preview: Boolean) {
      biographyCollection(locale: $locale, preview: $preview) {
        items {
          content {
            json
          }
          image {
            title
            url
          }
        }
      }
    }
  `, { locale, preview })
  return data?.biographyCollection?.items[0]
}

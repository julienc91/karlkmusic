export default async (req, res) => {
  if (req.query.secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!['/biographie', '/discographie', '/videoclips', '/bandes-sons'].includes(req.query.path)) {
    return res.status(401).json({ message: 'Invalid path' })
  }

  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(req.query.path)
}

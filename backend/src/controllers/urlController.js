import Url from '../models/urlModel.js'

export const shortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body
    const id = req.user
    const url = await Url.existingUrl(originalUrl)

    // Validations
    if (!originalUrl) return res.status(400).send({ message: 'Original URL is required' })
    if (!id) return res.status(401).send({ message: 'Unauthorized' })
    if (url) return res.status(400).send({ message: 'URL has been shortened for this user' })

    const short = await Url.shortUrl(originalUrl, id)

    res.status(200).send({ message: 'URL has been shorted succesfully', result: short })
  } catch (error) {
    throw new Error(error.message)
  }
}

export const redirectShortUrl = async (req, res) => {
  try {
    const { shortCode } = req.params.shortCode

    const result = await Url.redirectShortUrl(shortCode)
    if (result) return res.redirect(result.originalUrl)

    res.status(404).send({ message: 'URL not found' })
  } catch (error) {
    throw new Error(error.message)
  }
}

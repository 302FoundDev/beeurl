import Url from '../models/urlModel.js'

const urlValidations = async (originalUrl) => {
  
}

export const shortUrl = async (req, res) => {
  try {
    // Validations
    let { originalUrl } = req.body
    if (!originalUrl) return res.status(400).send({ message: 'Original URL is required' })

    const urlPattern = /^(https?:\/\/)/
    if (!urlPattern.test(originalUrl)) originalUrl = `https://${originalUrl}`

    const id = req.user.id
    if (!id) return res.status(400).send({ message: 'ID is required' })

    const url = await Url.existingUrl(originalUrl)
    if (url) return res.status(400).send({ message: 'URL has been shortened for this user' })

    const short = await Url.shortUrl(originalUrl, id)

    res.status(200).send({ message: 'URL has been shorted succesfully', result: short })
  } catch (error) {
    throw new Error(error.message)
  }
}

export const redirectShortUrl = async (req, res) => {
  try {
    const { shortCode } = req.params

    const result = await Url.redirectShortUrl(shortCode)
    const url = result.original_url
    if (!url) return res.status(404).send({ message: 'URL not found' })

    return res.redirect(url)
  } catch (error) {
    throw new Error(error.message)
  }
}

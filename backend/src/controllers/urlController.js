import Url from "../models/urlModel.js"
import dotenv from "dotenv"

dotenv.config()

export const shortenUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body
        const userId = req.user.id
        const url = await Url.shortenedUrl(originalUrl)

        if (url) {
            return res.status(402).json({ message: 'URL has been shortened for this user' })
        }

        const short = await Url.shortUrl(originalUrl, userId)

        return res.status(200).json(short)
    }

    catch (error) {
        res.status(500).json({ message: 'Error while acortando URL', error: error.message })
    }
}

export const redirectToOriginalUrl = async (req, res) => {
    try {
        const { shortCode } = req.params
        const shortUrl = `${process.env.LOCALHOST_BACKEND}/${shortCode}`

        const url = await Url.shortenedUrl(shortUrl)

        if (url) {
            return res.redirect(url.originalUrl)
        }

        res.status(404).json({ message: 'URL not found' })
    }

    catch (error) {
        throw new Error(error.message)
    }
}


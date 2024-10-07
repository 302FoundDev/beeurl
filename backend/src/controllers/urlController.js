import Url from "../models/urlModel.js"
import dotenv from "dotenv"

dotenv.config()

export const shortenUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body
        const urls = await Url.shortUrl(originalUrl)

        return res.status(200).json(urls)
    }

    catch (error) {
        res.status(500).json({ message: 'Error while acortando URL', error })
    }
}

export const redirectToOriginalUrl = async (req, res) => {
    try {
        const { shortCode } = req.params

        const url = await Url.shortenedUrl({ shortUrl: `${process.env.LOCALHOST_BACKEND}/${shortCode}` })

        if (url) {
            return res.redirect(url.originalUrl)
        }

        res.status(404).json({ message: 'URL not found' })
    }

    catch (error) {
        throw new Error(error.message)
    }
}


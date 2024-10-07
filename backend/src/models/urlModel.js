import pool from "./database/database.js"
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'

dotenv.config()

class Url {

    static async shortenedUrl() {
        try {
            const query = ''
        }

        catch (error) {
            throw new Error(error.message)
        }
    }

    static async shortUrl(originalUrl) {
        const shortCode = nanoid(7)
        const BASE_URL = process.env.LOCALHOST_BACKEND
        const short_url = `${BASE_URL}/${shortCode}`

        try {
            const query = `INSERT INTO urls (original_url, shortened_url) VALUES ($1, $2) RETURNING *`
            const values = [originalUrl, short_url]

            await pool.query(query, values)

            return { message: 'Url shortened succesfully' }
        }

        catch (error) {
            throw new Error(`Error at the MODEL: ${error.message}`)
        }
    }
}

export default Url

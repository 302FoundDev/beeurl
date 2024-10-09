import pool from "./database/database.js"
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'

dotenv.config()

class Url {

    static async shortenedUrl(originalUrl) {
        try {
            const query = `SELECT * FROM urls WHERE original_url = $1`
            const result = await pool.query(query, [originalUrl])

            return result.rows[0]
        }

        catch (error) {
            throw new Error(`Error: ${error.message}`)
        }
    }

    static async shortUrl(originalUrl, userId) {
        const shortCode = nanoid(7)
        const BASE_URL = process.env.LOCALHOST_BACKEND
        const short_url = `${BASE_URL}/${shortCode}`

        try {
            const query = `INSERT INTO urls (original_url, shortened_url, owner_id) VALUES ($1, $2,  $3)`
            const values = [originalUrl, short_url, userId]

            const result = await pool.query(query, values)

            return result ? { message: 'Url shortened succesfully' } : { message: "Url has not been shortened successfull..." }
        }

        catch (error) {
            throw new Error(`Error at the MODEL: ${error.message}`)
        }
    }
}

export default Url

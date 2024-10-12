import pool from './database/database.js'
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'

dotenv.config()

class Url {
  static async existingUrl (originalUrl) {
    try {
      const query = 'SELECT * FROM urls WHERE original_url = $1'
      const result = await pool.query(query, [originalUrl])

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async shortUrl (originalUrl, id) {
    const shortCode = nanoid(7)

    try {
      const query = 'INSERT INTO urls (original_url, shortened_url, owner_id) VALUES ($1, $2, $3) RETURNING *'

      const values = [originalUrl, shortCode, id]

      const result = await pool.query(query, values)

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async redirectShortUrl (shortCode) {
    try {
      const query = 'SELECT original_url FROM urls WHERE shortened_url = $1'
      const result = await pool.query(query, [shortCode])

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default Url

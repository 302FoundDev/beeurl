import pool from './database/database.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default class AuthSesion {
  static async checkCredentials (email, password) {
    try {
      // Search user in the db
      const query = 'SELECT email, password FROM users WHERE email = $1'
      const result = await pool.query(query, [email])

      const user = result.rows[0]
      if (!user) {
        throw new Error('User not found', email, false)
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return false

      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async login (email) {
    try {
      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      )

      return {
        token,
        email
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async verifyToken(id) {
    try {
      const query = 'SELECT * FROM users WHERE id = $1'
      const result = await pool.query(query, [id])

      if (result.rows.length === 0) throw new Error('User id not found')

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async profile (email) {
    try {
      const query = 'SELECT users.id,users.name,users.email,urls.original_url,urls.shortened_url FROM users INNER JOIN urls ON users.id = urls.owner_id WHERE users.email = $1'
      const result = await pool.query(query, [email])

      if (result.rows.length === 0) throw new Error('User not found')

      return {
        user: {
          id: result.rows[0].id,
          name: result.rows[0].name,
          email: result.rows[0].email
        },
        urls: result.rows.map(row => ({
          original_url: row.original_url,
          shortened_url: row.shortened_url
        }))
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

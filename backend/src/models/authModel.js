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
      if (!user) return false

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return false

      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async login (email, password) {
    try {
      const token = jwt.sign(
        { email, password },
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

  static async profile (data) {
    try {
      const query = 'SELECT * FROM users WHERE email = $1'
      const result = await pool.query(query, [data.email])

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

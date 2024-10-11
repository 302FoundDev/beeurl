import pool from './database/database.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default class AuthSesion {
  static async checkCredentials(data) {
    try {
      // Search user in the db
      const query = 'SELECT email, password FROM users WHERE email = $1'
      const result = await pool.query(query, [data.email])

      const user = result.rows[0]

      if (!user) {
        return false
      }

      const isMatch = await bcrypt.compare(data.password, user.password)
      if (!isMatch) {
        return false
      }

      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async login(data) {
    try {
      const token = jwt.sign(
        { email: data.email, password: data.password },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      )

      return {
        token,
        user: {
          email: data.email
        }
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async userData(data) {
    try {
      const query = 'SELECT * FROM users WHERE email = $1'
      const result = await pool.query(query, [data.email])

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

/* eslint-disable camelcase */
import pool from './database/database.js'
import bcrypt from 'bcrypt'

class User {
  static async userExists(email) {
    try {
      const query = 'SELECT email FROM users WHERE email = $1'
      const result = await pool.query(query, [email])

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async create(name, email, password) {
    try {
      // Hashed password
      const hashedPassword = await bcrypt.hash(password, 10)
      password = hashedPassword

      // Create new user
      const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email'
      const result = await pool.query(query, [name, email, password])

      return result.rows[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default User

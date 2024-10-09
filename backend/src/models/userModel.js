/* eslint-disable camelcase */
import pool from './database/database.js'
import bcrypt from 'bcrypt'

class User {
  static async userData (data) {
    try {
      const query = 'SELECT * FROM users WHERE email = $1'
      const result = await pool.query(query, [data.email])

     return result.rows[0]
    }

    catch (error) {
      throw new Error(error.message)
    }
  }

  static async userExists (email) {
    
    try {
      const query = `SELECT * FROM users WHERE email = $1`
      const result = await pool.query(query, [email])

      return result.rows[0]
    } 
    
    catch (error) {
      throw new Error(`Error: ${error.message}`)
    }

  }

  static async create (data) {
    try {
      // Hashed password
      const hashedPassword = await bcrypt.hash(data.password, 10)
      data.password = hashedPassword

      // Create new user
      const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`
      const result = await pool.query(query, [data.name, data.email, data.password])
      
      return result.rows[0]
    }
    
    catch (error) {
      throw new Error(`Error: ${error.message}`)
    }

  }
}

export default User

/* eslint-disable camelcase */
import pool from './database/database.js'
import bcrypt from 'bcrypt'

class User {
  static async userData (email) {
    try {

    }

    catch (error) {
      
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
      // Check if the user exists
      const user = await this.userExists(data.email)

      if (user) {
        return { message: 'User already exists' }
      }

      // Hashed password
      const hashedPassword = await bcrypt.hash(data.password, 10)
      data.password = hashedPassword

      // Create new user
      const query = `INSERT INTO users (complete_name, email, password) VALUES ($1, $2, $3)`
      await pool.query(query, [data.complete_name, data.email, data.password])
      
      return { message: "User created succesfully" }
    }
    
    catch (error) {
      throw new Error(`Error: ${error.message}`)
    }

  }
}

export default User

/* eslint-disable camelcase */
import pool from './database/database.js'
import bcrypt from 'bcrypt'

class User {
  static async userExists (email) {
    try {
      const query = `SELECT * FROM users WHERE email = $1`
      const result = await pool.query(query, [email])

      return result.rows.length > 0
    } 
    
    catch (error) {
      throw new Error('Error al verificar si el usuario existe', error.message)
    }

  }

  static async create (data) {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    data.password = hashedPassword
    const query = `INSERT INTO users (complete_name, email, password) VALUES ($1, $2, $3)`

    try {
      // Verificar si el usuario ya existe
      const user = await this.userExists(data.email)

      if (user) {
        return { message: 'El usuario ya existe' }
      }

      // return  { message: 'El usuario no existe' }

      const result = await pool.query(query, [data.complete_name, data.email, data.password])
      if (result && result.rows.length > 0) {
        console.log("usuario creado con exito")
        return result.rows[0]
      }
    } 
    
    catch (error) {
      return { message: 'Error al crear el usuario', error: error.message }
      // throw new Error('Error al crear el usuario', error)
    }

  }
}

export default User

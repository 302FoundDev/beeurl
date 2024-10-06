import pkg from 'pg'
import { configDotenv } from 'dotenv'

configDotenv()

const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.PSQL
})

export const connectDB = async () => {
  let client
  try {
    client = await pool.connect() // Conecta al cliente
    console.log('Base de datos conectada')
    client.release()
  } catch (error) {
    console.log('Error al conectar con la base de datos', error.message)
  }
}

export default pool

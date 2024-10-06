import express from 'express'
import urlRoutes from './routes/urlRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { connectDB } from './models/database/database.js'

// Instalar ts-node-dev para que se pueda ejecutar el archivo de forma local
// para que se puedan probar las rutas
// pnpm install ts-node-dev --save-dev

const app = express()
connectDB()
app.use(express.json()) // middleware que transforma el req.body de la petición en un objeto json

app.get('/', (req, res) => {
  res.send('404 Not Found')
})

app.use('/api/urls', urlRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.disable('x-powered-by')
const port = process.env.PORT ?? 4000
app.listen(port, () => {
  console.log(`server runing on port ${process.env.LOCALHOST_BACKEND}:${port}`)
})

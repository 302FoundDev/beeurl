import express from 'express'
import { userData, login } from '../controllers/authController.js'

const router = express.Router()

router.get('/user-data', userData)
router.post('/login', login)

export default router

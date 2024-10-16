import express from 'express'
import { userData, login, logout } from '../controllers/authController.js'

const router = express.Router()

router.get('/user-data', userData)
router.post('/login', login)
router.post('logout', logout)

export default router

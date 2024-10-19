import express from 'express'
import { profile, login, logout } from '../controllers/authController.js'
import { authenticateJWT } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/profile', authenticateJWT, profile)
router.post('/login', login)
router.post('logout', logout)

export default router

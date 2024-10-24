import express from 'express'
import { profile, login, logout, verifyToken } from '../controllers/authController.js'
import { authenticateJWT } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/profile', authenticateJWT, profile)
router.post('/login', login)
router.post('/logout', logout)
router.get('/verify', verifyToken)

export default router

import express from 'express'
import { userData } from '../controllers/authController.js'

const router = express.Router()

router.get('/user-data', userData)
router.post('/login')

export default router

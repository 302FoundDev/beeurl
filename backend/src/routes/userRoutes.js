import express from 'express'
import { userExists, createUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/find', userExists)
router.post('/create', createUser)

export default router

import express from 'express'
import { shortUrl, redirectShortUrl } from '../controllers/urlController.js'
import { authenticateJWT } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/shorten', authenticateJWT, shortUrl)
router.get('/:shortCode', authenticateJWT, redirectShortUrl)

export default router

import express from 'express'
import { shortenUrl, redirectToOriginalUrl } from '../controllers/urlController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/shorten', authMiddleware, shortenUrl)
router.get('/:shortCode', authMiddleware, redirectToOriginalUrl)

export default router

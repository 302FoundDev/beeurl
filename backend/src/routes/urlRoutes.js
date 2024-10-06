import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h2>Fetching URLs</h2>')
})

router.post('/', (req, res) => {
  res.send('<h2>Creating shortened URLs</h2>')
})

export default router

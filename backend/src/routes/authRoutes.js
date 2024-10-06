import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('logging in')
})

router.post('/', (req, res) => {
  res.send('logging out')
})

export default router

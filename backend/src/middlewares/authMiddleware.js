import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null

  if (!token) return res.status(401).json({ message: 'Access denied, token is required' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}


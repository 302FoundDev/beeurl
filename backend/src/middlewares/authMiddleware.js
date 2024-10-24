import jwt from 'jsonwebtoken'

export const authenticateJWT = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) return res.status(401).json({ message: 'Access denied. Token not provided' })


  if (token == null) return res.status(401)
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token is invalid' })
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }
    req.user = user
    next()
  })
}

import AuthSesion from '../models/authModel.js'

const validationErrors = (email, password) => {
  const errors = {}

  // Validate email
  if (typeof email !== 'string') errors.email = 'Email must be a string'
  if (email === '') errors.email = 'Email should not be empty'

  // Validate password
  if (password === '') errors.password = 'Password must be a string'
  if (typeof password !== 'string') errors.password = 'Password must be a string'

  return errors
}

export const login = async (req, res) => {
  const { email, password } = req.body

  const validate = validationErrors(email, password)

  // Convert validateErrors into an array and validate if length is more than 0
  if (Object.keys(validate).length > 0) return res.status(400).send(validate)

  try {
    const checkCreds = await AuthSesion.checkCredentials(email, password)
    if (!checkCreds) return res.status(400).send({ message: 'Invalid credentials' })

    const user = await AuthSesion.login(email, password)
    const { token } = user

    // Save the cookie
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60
    })

    res.status(200).send({ message: 'Login successfully' })
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).send({ message: 'Server error' })
  }
}

export const profile = async (req, res) => {
  const { email } = req.user

  if (!req.user) return res.status(401).json({ message: 'User not found' })

  const userProfile = await AuthSesion.profile(email)
  res.json({ user: userProfile })
}

export const logout = async (req, res) => {
  const token = req.cookies.access_token

  if (!token) return res.json({ message: 'Session already closed' })

  res.clearCookie('access_token')
  return res.status(200).json({ message: 'Session closed' })
}


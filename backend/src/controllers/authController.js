import AuthSesion from '../models/authModel.js'

export const userData = async (req, res) => {
  const { name, email } = req.body
  const data = { name, email }

  try {
    const auth = await AuthSesion.userData(data)

    if (!auth) return res.status(404).send({ message: 'User not found' })

    res.status(200).send(auth)
  } catch (error) {
    throw new Error(error.message)
  }
}

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
      secure: process.env.NODE_ENV === 'production' ?? 'development',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60
    })

    res.status(200).send({ message: 'Login successfully' })
  } catch (error) {
    throw new Error(error.message)
  }
}

// TODO
export const logout = async (req, res) => {
  const out = await AuthSesion.logout()
  res.status(200).send(out)
}

import AuthSesion from '../models/authModel.js'

export const userData = async (req, res) => {
  const { name, email } = req.body
  const data = { name, email }

  try {
    const auth = await AuthSesion.userData(data)

    if (!auth) return res.status(404).json({ message: 'User not found' })

    res.status(200).json(auth)
  } catch (error) {
    throw new Error(error.message)
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const data = { email, password }

    // Validate email
    if (typeof data.email !== 'string') return res.status(400).json({ email: 'Email must be a string' })
    if (data.email === '') return res.status(400).json({ email: 'Email should not be empty' })

    // Validate password
    if (data.password === '') return res.status(400).json({ email: 'Password should not be empty' })
    if (typeof data.password !== 'string') return res.status(400).json({ password: 'Password must be a string' })

    const checkCreds = await AuthSesion.checkCredentials(data)
    const user = await AuthSesion.login(data)

    if (!checkCreds) return res.status(401).json({ message: 'Invalid credentials' })

    res.status(200).json({ message: 'Login Successfully', user })
  } catch (error) {
    throw new Error('error', error.message)
  }
}

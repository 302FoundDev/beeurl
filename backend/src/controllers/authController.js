import AuthSesion from '../models/authModel.js'

export const userData = async (req, res) => {
  const { name, email } = req.body
  const data = { name, email }

  try {
    const auth = await AuthSesion.userData(data)

    if (!auth) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json(auth)
  } catch (error) {
    throw new Error(error.message)
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const data = { email, password }

    const checkCreds = await AuthSesion.checkCredentials(data)
    const user = await AuthSesion.login(data)

    if (!checkCreds) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    res.status(200).json(user)
  } catch (error) {
    throw new Error(error.message)
  }
}

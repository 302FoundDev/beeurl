/* eslint-disable camelcase */
import User from '../models/userModel.js'

export const userExists = async (req, res) => {
  try {
    const { email } = req.body
    const users = await User.userExists(email)

    res.status(200).json(users)
  }

  catch (error) {
    res.status(500).json({ message: 'Error recovering user', error })
  }
}

export const createUser = async (req, res) => {
  const { name, email, password } = req.body
  const data = { name, email, password }

  try {
    const checkUser = User.userExists(email)
    if (checkUser) {
      return res.status(402).json({ message: 'User already exists' })
    }

    const user = await User.create(data)
    return res.status(201).json({ message: 'User has been create successfully', result: user })
  } 

  catch (error) {
    res.status(500).json({ message: 'Error while creating user', error: error.message })
  }
}

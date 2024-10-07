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

  const { complete_name, email, password } = req.body
  const data = { complete_name, email, password }

  try {
    const user = await User.create(data)
    res.status(201).json(user)
  } 

  catch (error) {
    res.status(500).json({ message: 'Error while creating user', error: error.message })
  }

}

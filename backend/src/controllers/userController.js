/* eslint-disable camelcase */
import User from '../models/userModel.js'

export const userExists = async (req, res) => {
  try {
    const { email } = req.body

    // Check if user given by email exists
    const users = await User.userExists(email)

    res.status(200).send(users)
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const checkUser = await User.userExists(email, password, name)

    if (checkUser) {
      return res.status(400).send({ message: 'User already exists' })
    }

    const user = await User.create(email, password, name)
    res.status(201).send({ message: 'User has been create successfully', result: user })
  } catch (error) {
    throw new Error(error.message)
  }
}

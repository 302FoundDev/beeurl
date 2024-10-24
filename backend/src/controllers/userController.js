/* eslint-disable camelcase */
import User from '../models/userModel.js'

export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const checkUser = await User.userExists(email)

    if (checkUser) {
      return res.status(400).send({ message: 'User already exists' })
    }

    const user = await User.create(name, email, password)
    res.status(201).send({ message: 'User has been create successfully', result: user })
  } catch (error) {
    throw new Error(error.message)
  }
}

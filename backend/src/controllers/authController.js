import User from "../models/userModel.js"

export const userData = async (req, res) => {
  const { complete_name, email } = req.body
  const data = { complete_name, email }

  try {
    const auth = await User.userData(data)

    if (!auth) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json(auth)
  }
  
  catch (error) {
    return res.status(500).json({ message: 'INTERNAL SERVER ERROR' })
  }
}

export const login = async (req, res) => {
  try {

  } catch (error) {

  }
}

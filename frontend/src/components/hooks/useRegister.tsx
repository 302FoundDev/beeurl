import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
  
    const API_URL = 'http://localhost:8000/api/auth/login'
    const fields = Object.fromEntries(new window.FormData(e.target))
    const data = { name: fields.name, email: fields.email, password: fields.password }
  
    setIsLoading(!isLoading)
    setErrorMessage(null)
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
  
      const res = await response.json()
  
      if (response.ok) {
        navigate('/signin')
        return res
      } else {
        console.error('Login error', res.message)
        setErrorMessage(res.message)
        setIsLoading(false)
      }
  
    } catch (error) {
      console.error(error)
      return error
    }
  }

  return { login, errorMessage, isLoading }
}

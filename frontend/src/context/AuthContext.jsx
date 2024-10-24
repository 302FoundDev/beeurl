import { createContext, useState, useContext, useEffect } from "react"
import Cookies from 'js-cookie'
import { verifyTokenRequest } from "../utils/verifyTokenRequest"

const initialAuthContext = {
  user: null,
  setUser: () => { },
  isAuthenticated: false,
  setIsAuthenticated: () => { }
}

export const AuthContext = createContext(initialAuthContext)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')

  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await verifyTokenRequest()
        if (res && res.data) {
          setIsAuthenticated(true)
          setUser(res.data.user)
        } else {
          setIsAuthenticated(false)
          setUser(null)
        }
      } catch (error) {
        setIsAuthenticated(false)
        setUser(null)
        Cookies.remove('access_token')
        console.error('Error verifying token: ', error)
      }
    }

    console.log(isAuthenticated)

    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

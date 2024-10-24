import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from '../context/AuthContext'

export const ProtectedRoute = () => {

  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    <Navigate  to='/signin' />
  }

  return  <Outlet  />
}

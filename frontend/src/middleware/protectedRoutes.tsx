import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {

  const isAuthenticated = () => {
    
  }

  if (!isAuthenticated) return <Navigate to='/signin' />

  return <Outlet />
}

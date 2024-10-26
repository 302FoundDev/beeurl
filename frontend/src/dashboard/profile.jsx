import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

/*const useProfile = () => {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { usr, isAuthenticated } = useAuth()

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) return

      setIsLoading(true)

      try {
        const response = await fetch('http://localhost:8000/api/auth/profile', {
          method: 'GET',
          credentials: 'include',
        })

        if (!response.ok) {
          //TODO
          navigate('/signin')

          throw new Error('Error getting data')
        }

        const data = await response.json()
        setUser(data.user)
      } catch (error) {
        console.error(error)
        return error
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [user])

  return { user, isLoading }
}
*/

export const Profile = () => {

  return (
    <section className="max-w-screen min-h-full flex bg-gray-100">
      <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-gray-200 p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Nombre </h2>
          <h2 className="text-lg text-gray-600">correo@ejemplo.com</h2>
        </div>
        <div className="mt-4">
          {/* Puedes agregar más contenido aquí, como una lista de URLs o botones */}
        </div>
      </div>
    </section>
  )
}

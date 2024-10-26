import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigation, useLocation } from 'react-router-dom'
import { Settings } from '../components/Settings'
import { Sidenav } from '../components/Sidenav'

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
  const location = useLocation()

  return (
    <section className="max-w-screen min-h-full flex bg-gray-100">
      <Sidenav pathname={location.pathname} />
      <Settings />
    </section>
  )
}

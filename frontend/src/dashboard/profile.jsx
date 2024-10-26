import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

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
    <section className="max-w-screen-xl m-auto border h-100">


      <div className='border-l border-r max-h-screen-sm max-w-screen-sm'>
        <div>
          <div>
            <h2></h2>
            <h2></h2>
          </div>
        </div>
      </div>

    </section>
  )
}

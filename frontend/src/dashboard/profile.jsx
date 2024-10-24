import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useProfile = () => {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

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

export const Profile = () => {

  const { user, isLoading } = useProfile()

  return (
    <section className="max-w-screen-xl m-auto border h-100">
      <div>
        <div>
          <h2>Profile page</h2>
        </div>
        <div>
          {isLoading && <p>Loading...</p>}
          {user && (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Shortened: <span className='font-semibold'>/{user.shortened_url}</span></p>
              <p>Original URL: <span className='font-semibold'>{user.original_url}</span></p>
            </div>
          )}
        </div>
      </div>

      <div>
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

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Eye, EyeOff} from 'lucide-react'
import { Button } from '../components/ui/Button'

const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()

    const API_URL = 'http://localhost:8000/api/auth/login'
    const fields = Object.fromEntries(new window.FormData(e.target))
    const data = { email: fields.email, password: fields.password }

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
        navigate('/dashboard')
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

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { login, errorMessage, isLoading } = useLogin()

  return (
    <section className='min-h-min flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-2 text-center text-3xl font-extrabold '>
            Login into your account
          </h2>
          {
            errorMessage && <span className='text-red-500 text-center'>{errorMessage}</span>
          }
        </div>
        
        <form
          onSubmit={login}
          className='flex flex-col gap-8'
        >
          <input 
            type='hidden' 
            name='remember'
            value='true'
          />
          <div className='flex flex-col gap-1'>

            <div className='relative'>
              <label 
                htmlFor="email-address"
                className='sr-only'
              >
                Email address
              </label>
              <input
                type="email"
                name='email'
                id='email-address'
                autoComplete='email'
                required
                className='appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-700 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>

            <div className='relative'>
              <label 
                htmlFor="password" 
                className='sr-only'
              >
                Password
              </label>
              <input
                type={showPassword ? 'text': 'password'}
                name='password'
                id='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-700 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center'
                onClick={() => {
                  setShowPassword(!showPassword)
                }}
              >
                {
                  showPassword ? (
                      <EyeOff className='h-5 w-5 text-gray-400' />
                    ) : (
                      <Eye className='h-5 w-5 text-gray-400' />
                    )
                }
              </button>
            </div>

          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <input 
                  type="checkbox"
                  id='remember-me'
                  name='remember-me'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label 
                  htmlFor="remember-me"
                  className='ml-2 block text-sm text-gray-300'
                >
                  Remember me
                </label>
            </div>

            <div className='text-sm'>
                <a 
                  href="#"
                  className='form-medium text-sky-500 hover:text-sky-600'
                >
                  Forgot your password?
                </a>
            </div>
          </div>

          <div>
            <Button 
              variant='secondary' 
              size='lg'
            >
              {isLoading ? 'Sign in...' : 'Sign in'}
            </Button>
          </div>
      </form>

      </div>
    </section>
  )
}

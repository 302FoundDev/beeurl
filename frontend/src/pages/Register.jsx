import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Eye, EyeOff} from 'lucide-react'
import { Button } from '../components/ui/Button'

const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault()

    const fields = Object.fromEntries(new FormData(e.currentTarget))
    const { name, email, password, confirmPassword } = fields

    if (password !== confirmPassword) {
      setErrorMessage('Password do not match')
      return
    }

    setIsLoading(!isLoading)

    try {
      const response = await fetch('http://localhost:8000/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password })
      })

      const res = await response.json()

      if (response.ok) {
        navigate('/signin')
        return res
      } else {
        console.error('Register error', res.message)
        setErrorMessage(res.message)
        setIsLoading(false)
      }

    } catch (error) {
      console.error(error)
      return error
    }
  }

  return { register, errorMessage, isLoading }
}

export const Register = () => {

  const { register, errorMessage, isLoading } = useRegister()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className='min-h-min flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-2 text-center text-3xl font-extrabold '>
            Get started at BeeURL
          </h2>
          {
            errorMessage && <span className='text-red-500 text-center'>{errorMessage}</span>
          }
        </div>
        
        <form
          onSubmit={register}
          className='flex flex-col gap-8'>
          <div className='flex flex-col gap-1'>

            <div className='relative'>
              <label 
                htmlFor="complete-name"
                className='sr-only'
              >
                Complete name
              </label>
              <input
                type="text"
                name='name'
                id='Complete-name'
                autoComplete='name'
                required
                className='appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-700 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm'
                placeholder='Complete name'
              />
            </div>

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

            <div className='relative'>
              <label 
                htmlFor="confirmPassword"
                className='sr-only'
              >
                Confirm password
              </label>
              <input
                type={showPassword ? 'text': 'password'}
                name='confirmPassword'
                id='confirmPassword'
                autoComplete='current-password'
                required
                className='appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-700 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm'
                placeholder='Confirm pasword'
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
                  className='h-4 w-4 text-indigo-600 focus:ring-blue-400 border-gray-300 rounded'
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
                  href="/signin"
                  className='form-medium text-sky-500 hover:text-sky-600'
                >
                  Already have an account?
                </a>
            </div>
          </div>

          <div>
            <Button 
              variant='secondary' 
              size='lg'
            >
              {isLoading ? 'Signing up...' : 'Sign up'}
            </Button>
          </div>
      </form>

      </div>
    </section>
  )
}

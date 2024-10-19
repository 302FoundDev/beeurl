import { useState } from 'react'
import {Eye, EyeOff} from 'lucide-react'
import { Button } from '../components/ui/Button'

export const Register = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className='min-h-min flex items-center justify-center mt-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-2 text-center text-3xl font-extrabold '>
            Get started at BeeURL
          </h2>
        </div>
        
        <form className='flex flex-col gap-8'>
          <div className='flex flex-col gap-1'>

            <div className='relative'>
              <label 
                htmlFor="complete-name"
                className='sr-only'>
                Complete name
              </label>
              <input
                type="text"
                name='name'
                id='Complete-name'
                autoComplete='name'
                required
                className='appareance-none rounded-none relative blck w-full px-3 py-2 border border-gray-700 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Complete name'
              />
            </div>

            <div className='relative'>
              <label 
                htmlFor="email-address"
                className='sr-only'>
                Email address
              </label>
              <input
                type="email"
                name='email'
                id='email-address'
                autoComplete='email'
                required
                className='appareance-none relative blck w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>

            <div className='relative'>
              <label 
                htmlFor="password" 
                className='sr-only'>
                Password
              </label>
              <input
                type={showPassword ? 'text': 'password'}
                name='pasword'
                id='password'
                autoComplete='current-password'
                required
                className='appareance-none relative blck w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                htmlFor="confirm-pasword"
                className='sr-only'>
                Confirm password
              </label>
              <input
                type={showPassword ? 'text': 'password'}
                name='confirmPasword'
                id='confirm-password'
                autoComplete='current-password'
                required
                className='appareance-none rounded-none relative blck w-full px-3 py-2 border border-gray-700 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
              size='md'
            >
              Sign up
            </Button>
          </div>
      </form>

      </div>
    </section>
  )
}

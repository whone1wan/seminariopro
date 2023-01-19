import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = ({ nosexd }) => {
  const navigate = useNavigate()

  return (
    <div className='bg-no-repeat bg-cover bg-center relative'>
      <div className='min-h-screen sm:flex sm:flex-row mx-0 justify-center'>
        <div className='flex justify-center self-center  z-10'>
          <div className='p-12 bg-white mx-auto rounded-2xl w-100 '>
            <div className='mb-4'>
              <h3 className='font-semibold text-2xl text-gray-800'>Login</h3>
            </div>
            <div className='space-y-5'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-gray-700 tracking-wide'>
                  Correo institucional
                </label>
                <input
                  className=' w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400'
                  type=''
                  placeholder='mail@gmail.com'
                />
              </div>
              <div className='space-y-2'>
                <label className='mb-5 text-sm font-medium text-gray-700 tracking-wide'>
                  Contrasena
                </label>
                <input
                  className='w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400'
                  type=''
                  placeholder='Enter your password'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm'>
                  <a href='#' className='text-green-400 hover:text-green-500'>
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  onClick={() => navigate('/home')}
                  className='w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500'
                >
                  Sign in
                </button>
              </div>
              <div className='flex w-full justify-end'>
                <div className='text-sm'>
                  <button
                    onClick={nosexd}
                    className='text-green-400 hover:text-green-500'
                  >
                    aun no tienes cuenta? unete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

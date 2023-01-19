import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

const index = () => {
  return (
    <>
      <div class='w-full relative'>
        <img
          src='https://www.eluniversal.com.co/binrepository/1200x700/0c0/0d0/none/13704/SSPD/unicordoba_4692962_20210609121257.jpg'
          class='w-full h-[300px] object-cover shadow-sm'
        />
        <div class='absolute right-0 top-0'>
          <div class='flex flex-row-reverse justify-center items-center'>
            <div class='w-full flex justify-center'>
              <div class='relative'>
                <img
                  src='https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg?w=740'
                  class='shadow-xl rounded-full align-middle border-none overflow-hidden w-[100px] h-[100px] mt-10 object-cover'
                />
                <button className='rounded-lg mt-5 bg-green-400 text-white p-2 font-semibold'>
                  ver perfil
                </button>
              </div>
            </div>
            <div class='text-center text-green-500'>
              <div class='flex justify-center'>
                <div class='text-center'>
                  <span class='text-base font-bold block capitalize'>
                    Bienvenido  USUARIO
                  </span>
                  <span class='text-sm'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <Navbar />
        <main className='mt-10'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default index

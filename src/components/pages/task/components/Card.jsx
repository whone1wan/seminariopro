import React from 'react'

export const Card = () => {
  return (
    <div className='flex flex-col border px-3 py-2'>
      <h1 className='text-xs mb-2 font-bold text-gray-700 text-center'>
        Tareas de juan
      </h1>
      <div className='flex flex-row'>
        <img
          className='object-cover w-1/2 h-[100px]'
          src='https://guiauniversitaria.mx/wp-content/uploads/2020/04/apps-para-listas-de-tareas.jpg'
          alt=''
        />
        <div className='w-1/2 flex flex-col justify-between items-end'>
          <div className=''>
            <input type='checkbox' className='mx-2' name='' id='' />
            <span>add text</span>
          </div>
          <div className=''>
            <input type='checkbox' className='mx-2' name='' id='' />
            <span>add text</span>
          </div>
          <div className=''>
            <input type='checkbox' className='mx-2' name='' id='' />
            <span>add text</span>
          </div>
        </div>
      </div>
      <div className='mt-4 mb-2 pl-4 pr-2 flex items-center flex-col'>
        <div className='text-center'>
          <span className='text-gray-500 text-center text-xs'>
            progreso de la tarea (10%)
          </span>
          <input
            className='w-full text-yellow-300 rounded-lg overflow-hidden bg-green-400 h-3 w-128'
            type='range'
            name=''
            id=''
          />
        </div>
        <button className='text-lg block font-semibold py-1 px-6 text-green-100 hover:text-white bg-green-400 rounded-xl shadow hover:shadow-md transition duration-300'>
          ver tarea
        </button>
      </div>
    </div>
  )
}

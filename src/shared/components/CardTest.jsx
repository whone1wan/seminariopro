import React from 'react'
import { Link } from 'react-router-dom'

const CardTest = ({ title, type, to = '/' }) => {
  return (
    <Link
      to={to}
      className='rounded-3xl p-4 bg-white shadow-xl cursor-pointer hover:shadow-none transition-all'
    >
      <section className='flex items-center justify-between'>
        <div className='mt-3'>
          <h3 className='text-xs font-semibold'>{title}</h3>
          <h2 className='text-sm md:text-xl font-bold'>{type}</h2>
        </div>
      </section>
      <div className='text-gray-500 text-xs md:text-base'>
        <span>Encuesta para conocer su {type}</span>
      </div>
    </Link>
  )
}

export default CardTest

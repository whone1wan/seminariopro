import React from 'react'

export const Card = () => {
  return (
    <div class='h-full border-2 border-gray-200 border-opacity-60 overflow-hidden'>
      <img
        class='lg:h-48 md:h-36 w-full object-cover object-center'
        src='https://images.squarespace-cdn.com/content/v1/5919dd059f74568eef687d96/1647798212924-O6QAQZB43W8160LY7RCM/adicci%C3%B3n-videojuegos.png?format=750w'
        alt='blog cover'
      />

      <div class='p-4'>
        <h2 class='tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase '>
          Web development
        </h2>
        <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
          This is a blog template
        </h1>
      </div>
    </div>
  )
}

import React from 'react'

import {
  UilEstate,
  UilAnalytics,
  UilClipboardNotes,
  UilSetting,
  UilBookMedical,
  UilArchway
} from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'

const NAVLINK_ROUTES = [
  {
    name: 'Inicio',
    icon: <UilEstate />,
    link: '/home'
  },
  {
    name: 'Citas',
    icon: <UilArchway />,
    link: 'dating'
  },
  {
    name: 'Estadisticas',
    icon: <UilAnalytics />,
    link: 'analytic'
  },
  {
    name: 'Caja de herramientas',
    icon: <UilSetting />,
    link: 'settings'
  },
  {
    name: 'Entradas',
    icon: <UilBookMedical />,
    link: 'entradas'
  },
  {
    name: 'Tareas',
    icon: <UilClipboardNotes />,
    link: 'tasks'
  }
]

export const Navbar = () => {
  return (
    <div className='w-full text-gray-700 bg-white'>
      <div className='flex flex-col w-full mt-4'>
        <nav className='flex flex-row justify-between w-full px-5'>
          {NAVLINK_ROUTES.map((val) => (
            <li key={val.name} className='list-none'>
              <NavLink
                to={val.link}
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 '
                style={({ isActive }) => {
                  return isActive ? { backgroundColor: '#f3f4f6' } : undefined
                }}
              >
                {val.icon}
                <span className='ml-3 text-xs lg:text-base font-medium'>
                  {val.name}
                </span>
              </NavLink>
            </li>
          ))}
        </nav>
      </div>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from './components/Card'
const Task = () => {
  const navigate = useNavigate()

  const handleCreateTask = () => {
    navigate('create')
  }

  return (
    <div className='overflow-y-visible flex flex-col space-y-5'>
      <div className=''>
        <div className='flex justify-between m-4'>
          <h2 className='font-bold text-2xl'>Tareas</h2>
          <button
            onClick={handleCreateTask}
            className='text-lg block font-semibold py-1 px-6 text-green-100 hover:text-white bg-green-400 rounded-xl shadow hover:shadow-md transition duration-300'
          >
            crear tarea
          </button>
        </div>
        <div className='grid grid-cols-3 gap-8 border p-4'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Task

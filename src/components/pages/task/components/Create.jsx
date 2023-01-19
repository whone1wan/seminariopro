import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTask = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/home/tasks')
  }

  return (
    <>
      <h2 className='font-bold text-2xl'>Crear tarea</h2>
      <div className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full '>
          <form action=''>
            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label
                    for='fName'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Nombre
                  </label>
                  <input
                    type='text'
                    name='fName'
                    id='fName'
                    placeholder='Nomber'
                    className='w-full rounded-md border  border-emerald-200 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label
                    for='lName'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Descripcion
                  </label>
                  <input
                    type='text'
                    name='lName'
                    id='lName'
                    placeholder='Descripcion'
                    className='w-full rounded-md border  border-emerald-200 bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
              </div>
            </div>
            <div className='mb-5'>
              <label
                for='guest'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Estudiante
              </label>
              <select
                name='select'
                className='w-full  rounded-md  py-3 px-6 border border-emerald-200  bg-white'
              >
                <option value='value1' selected>
                  Juana
                </option>
                <option value='value2'>Value 2</option>
                <option value='value3'>Value 3</option>
              </select>
            </div>

            <div className='mb-5'>
              <label className='mb-3 block text-base font-medium text-[#07074D]'>
                Agregar que hacer
              </label>
              <div className='w-1/2 flex flex-col'>
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

            <div>
              <button
                onClick={handleNavigate}
                className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateTask

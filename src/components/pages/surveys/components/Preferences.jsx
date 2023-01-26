import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { UilClipboardAlt } from '@iconscout/react-unicons'

import { Answer } from './Answer'
import { schema, UseDefaultValues } from './utils/preferences'
import { PREFERENCES_ANSWER } from '../../../../shared/constants/answer'

const Preferences = () => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = UseDefaultValues()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues
  })

  return (
    <>
      <h2 className='font-bold capitalize text-xl'>Personalidad</h2>
      <div className='mt-4 bg-white py-4 px-7 rounded-xl shadow-xl'>
        <div className='flex space-x-1 md:space-x-4  justify-end mb-4'>
          <span className='uppercase md:text-sm text-[8px] font-bold'>
            Total descuerdo
          </span>
          <span className='uppercase md:text-sm text-[8px] font-bold'>
            Desacuerdo
          </span>
          <span className='uppercase md:text-sm text-[8px] font-bold'>
            No está seguro
          </span>
          <span className='uppercase md:text-sm text-[8px] font-bold'>
            De acuerdo
          </span>
          <span className='uppercase md:text-sm text-[8px] font-bold'>
            Total acuerdo
          </span>
        </div>

        <form
          className='relative flex flex-col'
          onSubmit={handleSubmit(submit)}
        >
          {PREFERENCES_ANSWER.map((val) => (
            <Answer
              answer={val.answer}
              register={register}
              key={val.id}
              radioID={val.id}
            />
          ))}
          {errors && (
            <p className='text-red-500 text-xs mb-2 md:text-base'>
              Debe seleccionar todas las casillas
            </p>
          )}
          <div className='w-full'>
            <button
              className='w-full bg-blue-300 p-2 rounded-lg font-semibold text-gray-50 hover:text-white hover:bg-blue-200 transition-all'
              type='submit'
              disabled={isLoading}
            >
              enviar
              <UilClipboardAlt className='ml-3 inline-block' />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Preferences

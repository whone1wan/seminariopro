import React from 'react'
import CardTest from '../../../shared/components/CardTest'

const Surveys = () => {
  return (
    <div>
      <h2 className='font-bold capitalize mb-3'>Encuestas</h2>
      <div className='grid md:grid-cols-2 gap-3'>
        {/* <Card title='Encuesta 1' type='Personalidad' to='personality' /> */}
        <CardTest title='Encuesta 1' type='Preferencias' to='adiccion' />
        <CardTest title='Encuesta 2' type='Vocacional' to='vocational' />
      </div>
    </div>
  )
}

export default Surveys

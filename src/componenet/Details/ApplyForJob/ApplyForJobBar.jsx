import React from 'react'
import Button from '../../helpers/Button'

const ApplyForJobBar = () => {
  return (
    <div className='card   flex p-6 justify-center items-center right-0 px-16 h-40 md:justify-between'>
      <div className='hidden md:block'>
        <h3 className='text-white text-4xl font-bold'>Senior Software Engineer</h3>
        <p>Scoot</p>
      </div>
    <Button text="Apply Now" bg='w-3/4 mb-6 md:w-1/4' />
    </div>
  )
}

export default ApplyForJobBar
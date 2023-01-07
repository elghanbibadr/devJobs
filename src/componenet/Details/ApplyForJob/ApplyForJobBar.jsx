import React, { useContext } from 'react'
import Button from '../../helpers/Button'
import { AppContext } from '../../../store/AppContext'

const ApplyForJobBar = () => {
  const {userJobClickedJobDetails:{company,position}}=useContext(AppContext)
  return (
    <div className='card   flex p-6 justify-center items-center right-0 px-16 h-40 md:justify-between'>
      <div className='hidden md:block'>
        <h3 className='text-white text-4xl font-bold'>{position}</h3>
        <p className='mt-2'>{company}</p>
      </div>
    <a className='inline-block w-80 ' target="_blank" href="https://example.com/maker/apply" >
    <Button text="Apply Now" bg='w-3/4 mb-6 md:w-full' />
    </a>
    </div>
  )
}

export default ApplyForJobBar
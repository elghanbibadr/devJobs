import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../store/AppContext'
import Button from '../../helpers/Button';

const CompanyDetails = () => {
 const {  userJobClickedJobDetails }=useContext(AppContext);
 
 console.log(userJobClickedJobDetails)
  return (
    <div className='card relative flex flex-col items-center p-14 md:flex-row justify-between' >
      <div className='w-32   flex justify-center  items-center absolute -top-20 left-0  right-0 mx-auto p-6 rounded-2xl h-28 md:-top-0 left-0 mx-2 mr-32 h-full w-72' style={{backgroundColor: userJobClickedJobDetails.logoBackground}}>
       <img src={userJobClickedJobDetails.logo} />
      </div>
      <div className='md:ml-80'>
        <h3 className='text-white text-4xl font-bold'>{userJobClickedJobDetails.company}</h3>
        <p className='my-10'>{userJobClickedJobDetails.apply}</p>
      </div>
     <Button text='Company site' bg='bg-paleBlue dark:bg-lightCyan dark:text-btn2' />
    </div>
  )
}

export default CompanyDetails
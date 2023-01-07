import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../store/AppContext'
import Button from '../../helpers/Button';

const CompanyDetails = () => {
 const {userJobClickedJobDetails,setIsUserSelectJobId}=useContext(AppContext);
 const handleBackToHomeClick=()=>setIsUserSelectJobId(undefined)
 
 return (
    <>
    <a onClick={handleBackToHomeClick} className='text-white text-2xl font-bold ' href="#">Go Back</a>
    <div className='card text-center mt-10 relative flex items-center  flex-col  p-14 md:flex-row justify-between md:text-left dark:bg-white ' >
      <div className='   flex justify-center w-28 h-24 items-center  mx-auto  p-6 relative bottom-24 rounded-2xl  md:absolute md:bottom-0 md:h-full md:w-60 left-0' style={{backgroundColor: userJobClickedJobDetails.logoBackground}}>
       <img className='w-full' src={userJobClickedJobDetails.logo} />
      </div>
      <div className='md:relative md:left-72'>
        <h3 className='text-white text-4xl font-bold '>{userJobClickedJobDetails.company}</h3>
        <p className='my-8 md:my-4'>{userJobClickedJobDetails.apply}</p>
      </div>
     <Button text='Company site' bg='bg-paleBlue ' />
    </div>
    
    </>
  )
}

export default CompanyDetails
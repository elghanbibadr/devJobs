import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../store/AppContext'
import Button from '../../helpers/Button';
import leftArrow from '../../../assets/desktop/arrow-left-solid.svg';
const CompanyDetails = () => {
 const {userJobClickedJobDetails,setIsUserSelectJobId}=useContext(AppContext);
 const handleBackToHomeClick=()=>setIsUserSelectJobId(undefined)
 
 return (
    <>
    <a onClick={handleBackToHomeClick} className='text-white goBackLink flex items-center text-2xl  font-bold dark:text-textColor hover:text-textColor dark:hover:text-cardsBg' href="#">
       {/* <img className='w-8 h-6 mr-4' src={leftArrow} /> */}
       <svg fill='#6670E2' className='w-8 h-6 mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path   d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
</svg>
       Go Back
       </a>
    <div className='card text-center mt-10 relative flex items-center  flex-col  p-14 md:flex-row justify-between md:text-left dark:bg-white ' >
      <div className='   flex justify-center w-28 h-24 items-center  mx-auto  p-6 relative bottom-24 rounded-2xl  md:absolute md:bottom-0 md:h-full md:w-60 left-0 md:rounded-r-none	' style={{backgroundColor: userJobClickedJobDetails.logoBackground}}>
       <img className='w-full' src={userJobClickedJobDetails.logo} />
      </div>
      <div className='md:relative md:left-72'>
        <h3 className='text-white text-4xl font-bold '>{userJobClickedJobDetails.company}</h3>
        <p className='my-8 md:my-4'>{userJobClickedJobDetails.apply}</p>
      </div>
     <Button text='Company site' bg='bg-paleBlue btn-2 ' />
    </div>
    
    </>
  )
}

export default CompanyDetails
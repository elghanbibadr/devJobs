import React, { useContext } from 'react'
import { AppContext } from '../../../store/AppContext'
import Button from '../../helpers/Button';

const CompanyDetails = () => {
 const {  userJobClickedJobDetails }=useContext(AppContext)
console.log(userJobClickedJobDetails)
  return (
    <div className='card'>
     <Button text='Company site' bg='bg-paleBlue dark:bg-lightCyan dark:text-btn2' />
    </div>
  )
}

export default CompanyDetails
import React, { useContext } from 'react'
import CompanyDetails from './CompanyDetails/CompanyDetails'
import JobDetails from './JobDetails/JobDetails'
import ApplyForJobBar from './ApplyForJob/ApplyForJobBar';
import { data } from '../../constant/data';
import { AppContext } from '../../store/AppContext';
const Details = () => {
  const {isUserSelectJobId,setIsUserSelectJobId}=useContext(AppContext)
  
  if(isUserSelectJobId){
    console.log(typeof +isUserSelectJobId)
    const selectedJobsDetails=data.find(element=> element["id"] == isUserSelectJobId )
    console.log(selectedJobsDetails)
  }
  return (
    <React.Fragment>
        <CompanyDetails/>
        <JobDetails/>
        <ApplyForJobBar/>
    </React.Fragment>
  )
}

export default Details
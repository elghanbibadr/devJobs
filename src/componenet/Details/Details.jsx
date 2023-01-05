import React, { useContext, useEffect } from 'react'
import CompanyDetails from './CompanyDetails/CompanyDetails'
import JobDetails from './JobDetails/JobDetails'
import ApplyForJobBar from './ApplyForJob/ApplyForJobBar';
import { data } from '../../constant/data';
import { AppContext } from '../../store/AppContext';
const Details = () => {
  const {isUserSelectJobId,setUserClickedJobDetails}=useContext(AppContext)
  setUserClickedJobDetails(data.find(element => element.id === +isUserSelectJobId))


  return (
    <React.Fragment>
        <CompanyDetails/>
        <JobDetails/>
        <ApplyForJobBar/>
    </React.Fragment>
  )
}

export default Details
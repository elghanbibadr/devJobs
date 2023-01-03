import React from 'react'
import CompanyDetails from './CompanyDetails/CompanyDetails'
import JobDetails from './JobDetails/JobDetails'
import ApplyForJobBar from './ApplyForJob/ApplyForJobBar';

const Details = () => {
  return (
    <React.Fragment>
        <CompanyDetails/>
        <JobDetails/>
        <ApplyForJobBar/>
    </React.Fragment>
  )
}

export default Details
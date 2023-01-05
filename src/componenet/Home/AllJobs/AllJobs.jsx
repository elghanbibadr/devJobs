import React from 'react'
import Job from './Job'
import {data} from '../../../constant/data'

const AllJobs = () => {
    


  return (
    <article className="grid grid-cols-1 gap-y-24 md:grid-cols-2 gap-x-10 lg:grid-cols-3">
    {data.map(({id,position, location,company,logo,logoBackground,postedAt,contract})=>{
      return <Job key={id} id={id} postedAt={postedAt} position={position} logoBackground={logoBackground} contract={contract} location={location} company={company} img={logo}  />
    })}
    </article>
  )
}

export default AllJobs
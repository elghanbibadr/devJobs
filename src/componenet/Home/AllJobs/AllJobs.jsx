import React from 'react'
import Job from './Job'
import {data} from '../../../constant/data'

const AllJobs = () => {
    

console.log(data)

  return (
    <article className="">
    {data.map(({id,position,location,company,logo,logoBackground})=>{
      return <Job key={id} position={position} logoBackground={logoBackground} location={location} company={company} img={logo}  />
    })}
    </article>
  )
}

export default AllJobs
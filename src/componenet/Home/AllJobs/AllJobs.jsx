import React, { useEffect } from 'react'
import Job from './Job'
import {data} from '../../../constant/data'
import scootLogo from '../../../assets/logos/scoot.svg'
const AllJobs = () => {
    

console.log(data)

  return (
    <article className="grid grid-cols-1 gap-y-16 ">
    <h1>alljobs</h1>
    {data.map(({id,position,location,company,logo,logoBackground})=>{
      return <Job key={id} position={position} logoBackground={logoBackground} location={location} company={company} img={logo}  />
    })}
    </article>
  )
}

export default AllJobs
import React from 'react'

const Job = (props) => {
  return (
    <div className='card relative p-7 job'>
     <img className= 'absolute p-4 -top-8'  src={props.img}
     style={{backgroundColor:props.logoBackground}}
     alt='company Logo' />
      <p>5h ago</p>
      <p>. Full Time</p>
      <h2 className='text-white text-4xl mb-6 font-semibold cursor-pointer'>{props.position}</h2>
      <p>{props.company}</p>
      <h3 className='text-2xl text-lightCyan mt-8 font-semibold '>{props.location}</h3>
    </div>
  )
}

export default Job
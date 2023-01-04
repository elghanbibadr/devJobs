import React from 'react'

const Job = (props) => {
  return (
    <div className='card relative px-8 py-16 job'>

      <div className='absolute -top-8 rounded-2xl h-20 w-24 p-4 flex justify-center items-center' 
         style={{backgroundColor:props.logoBackground}}>
       <img   src={props.img}
     alt='company Logo' />
      </div>

      <div className='flex my-6 '>
        <p>5h ago</p>
        <p className='ml-8'>. Full Time</p>
      </div>
      <h2 className='text-white text-4xl mb-6 font-semibold cursor-pointer'>{props.position}</h2>
      <p>{props.company}</p>
      <h3 className='text-2xl text-lightCyan mt-8 font-semibold '>{props.location}</h3>
    </div>
  )
}

export default Job
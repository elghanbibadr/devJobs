import React from 'react'

const Job = (props) => {
  return (
    <div className='card relative px-8 py-16 job dark:bg-white'>
      <div className='absolute -top-8 rounded-2xl h-20 w-24 p-4 flex justify-center items-center'
        style={{ backgroundColor: props.logoBackground }}>
        <img src={props.img}
          alt='company Logo' />
      </div>
      <div className='flex my-6 '>
        <p>{props.postedAt}</p>
        <p className='ml-8'>. {props.contract}</p>
      </div>
      <h2 className='text-white transition-colors	 text-4xl mb-6 font-semibold cursor-pointer hover:text-textColor'>{props.position}</h2>
      <p>{props.company}</p>
      <h3 className='text-2xl text-lightCyan mt-8 font-semibold '>{props.location}</h3>
    </div>
  )
}

export default Job
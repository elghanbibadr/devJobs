import React, { useContext } from 'react'
import { AppContext } from '../../../store/AppContext'
import Button from '../../helpers/Button'

const JobDetails = () => {
  const {userJobClickedJobDetails:{postedAt,description,position,requirements,role,location,contract}}=useContext(AppContext)
  
  return (
    <section className='card p-10 my-10 md:px-16'>
      < header className='md:flex items-center  justify-between'>
      <div>
        <div className='flex my-6  '>
          <p>{postedAt}</p>
          <p className='ml-8'>. {contract}</p>
        </div>
        <h1  className='text-white jobName  transition-colors	 text-5xl mb-6 font-semibold cursor-pointer hover:text-textColor'>{position}</h1>
        <h3 className='text-2xl text-lightCyan mt-8 font-semibold '>{location}</h3>
      </div>
      <a className='inline-block  ' target="_blank" href="https://example.com/maker/apply" >
       <Button text='Apply Now' bg='w-full my-10 md:w-60' /> 
     </a>
      </header>
      <main className='my-10'>
        <p>{description}</p>
        <div className="requirements my-16">
          <h2 className='text-white text-4xl mb-10 font-semibold'>Requirement</h2>
            <p className='mb-10'>{requirements.content}</p>
          <ul>
            {requirements.items.map(item=>{
              return <li  className='my-6'> <p> <strong className='text-3xl font-bold mr-6 '>.</strong> {item}</p></li>
            })}
          </ul>
        </div>
        <div className='What You Will Do'>
          <h2 className='text-white text-4xl font-semibold mt-16 mb-10'>What You Will Do</h2>
          <p>{role.content}</p>
          <p className='mb-10'>{requirements.content}</p>
          <ul>
            {role.items.map((item,index)=>{
              return <li  className='my-6'> <p> <strong className='text-3xl text-lightCyan font-bold mr-6 '>{index+1}</strong> {item}</p></li>
            })}
          </ul>
        </div>

      </main>

    </section>
  )
}

export default JobDetails
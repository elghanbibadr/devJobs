import React ,{useContext} from 'react'
import { AppContext } from '../../../store/AppContext'
import { data } from '../../../constant/data'

const Job = (props) => {
  const {isUserSelectJobId,setIsUserSelectJobId}=useContext(AppContext)

  const handleUserSelectJob=(e)=>{
    if(!e.target.className.includes('jobName')) return;
    setIsUserSelectJobId(e.currentTarget.id)
  }


  return (
    <div id={props.id} onClick={handleUserSelectJob} className='card relative px-8 py-16 job dark:bg-white'>
      <div className='absolute -top-8 rounded-2xl h-20 w-24 p-4 flex justify-center items-center'
        style={{ backgroundColor: props.logoBackground }}>
        <img src={props.img}
          alt='company Logo' />
      </div>
      <div className='flex my-6 '>
        <p>{props.postedAt}</p>
        <p className='ml-8'>. {props.contract}</p>
      </div>
      <h2  className='text-white jobName  transition-colors	 text-4xl mb-6 font-semibold cursor-pointer hover:text-textColor'>{props.position}</h2>
      <p>{props.company}</p>
      <h3 className='text-2xl text-lightCyan mt-8 font-semibold '>{props.location}</h3>
    </div>
  )
}

export default Job
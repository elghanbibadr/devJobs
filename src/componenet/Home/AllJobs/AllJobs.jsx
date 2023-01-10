import React,{useContext, useState} from 'react'
import Job from './Job'
import {data} from '../../../constant/data'
import notFoundLogo from "../../../assets/desktop/error.png"
import Button from '../../helpers/Button';
import { AppContext } from '../../../store/AppContext';

const AllJobs = () => {
  const {jobs}=useContext(AppContext)
  const [counter, setCounter] = useState(0);

  const loadMoreBtnClicked=()=>setCounter(data.length)
  const loadLessBtnClicked=()=>setCounter(0);

  return (
    <>
    
    <article className="grid  col  grid-cols-1 gap-y-24 md:grid-cols-2 gap-x-10 lg:grid-cols-3">
    {jobs.slice(0, counter + 9).map(({id,position, location,company,logo,logoBackground,postedAt,contract})=>{
      return <Job key={id} id={id} postedAt={postedAt} position={position} logoBackground={logoBackground} contract={contract} location={location} company={company} img={logo}  />
    })}
    </article>
    <div className=' flex justify-center items-center my-10 '>
      { jobs.length>=9 &&  counter <= 9 &&  <Button onClick={loadMoreBtnClicked} text='Load more' bg='w-80' />}
      {   jobs.length>=9 &&  counter > 9 &&  <Button onClick={loadLessBtnClicked} text='Load less' bg='w-80' />}
    </div>
    {jobs.length===0 && 
       <div className='not found flex flex-col items-center'>
        <h3 className='text-white text-3xl font-bold mb-8'>Not found</h3>
       <img className='w-60 h-60'  src={notFoundLogo}  alt='not found' />
     </div>
    }
    </>
  )
}

export default AllJobs
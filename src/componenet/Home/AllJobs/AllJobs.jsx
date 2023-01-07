import React,{useState} from 'react'
import Job from './Job'
import {data} from '../../../constant/data'
import Button from '../../helpers/Button';

const AllJobs = () => {
    
  const [counter, setCounter] = useState(0);

  // This function will be called when the user clicks the "Load More" button
  function loadMore() {
    // Increment the counter by 9
    setCounter(counter + 9);
  }

  const loadMoreBtnClicked=()=>setCounter(data.length)
  const loadLessBtnClicked=()=>setCounter(0);

  return (
    <>
    
    <article className="grid  col  grid-cols-1 gap-y-24 md:grid-cols-2 gap-x-10 lg:grid-cols-3">
    {data.slice(0, counter + 9).map(({id,position, location,company,logo,logoBackground,postedAt,contract})=>{
      return <Job key={id} id={id} postedAt={postedAt} position={position} logoBackground={logoBackground} contract={contract} location={location} company={company} img={logo}  />
    })}
    </article>
    <div className=' flex justify-center items-center my-10 '>
      { counter <= 9 &&  <Button onClick={loadMoreBtnClicked} text='Load more' bg='w-80' />}
      { counter > 9 &&  <Button onClick={loadLessBtnClicked} text='Load less' bg='w-80' />}
    </div>
    </>
  )
}

export default AllJobs
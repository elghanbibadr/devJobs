import React,{useContext} from 'react'
import Details from '../Details/Details'
import Home from '../Home/Home'
import { AppContext } from '../../store/AppContext'

const Wrraper=()=>{

const {isUserSelectJob , setIsUserSelectJob}=useContext(AppContext);
  return (
     <main className="bg-darkBlue">
     <section className=" max-w-8xl p-8 mx-auto h-screen">
      <Home/>
      {isUserSelectJob && <Details/>}   
       </section>
   </main>
  )
}


export default Wrraper;
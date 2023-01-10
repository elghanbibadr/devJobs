import React,{useContext} from 'react'
import Details from '../Details/Details'
import Home from '../Home/Home'
import { AppContext } from '../../store/AppContext'

const Wrraper=()=>{
  const {isUserSelectJobId , setIsUserSelectJobId}=useContext(AppContext);

  return (
     <main className="bg-darkBlue  dark:bg-darkWhite">
     <section className=" max-w-8xl p-8 mx-auto ">
      {!isUserSelectJobId && <Home/>}
      {isUserSelectJobId  && <Details/>}  
       </section>
   </main>

  )
}


export default Wrraper;
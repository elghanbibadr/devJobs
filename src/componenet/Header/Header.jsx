import React ,{useEffect, useState} from 'react'
import logo from ".././../assets/desktop/logo.svg"
import sunLogo from "../../assets/desktop/icon-sun.svg"
import moonLogo from "../../assets/desktop/icon-moon.svg"
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const  toggleDarkMode= () => {
   setDarkMode(prv => !prv)
  }

  useEffect(()=>{
    document.body.classList.toggle('dark')
  },[darkMode])

  return (
    <header className="h-60 pt-10 bg-no-repeat px-6 bg-cover ">
     <div className='max-w-8xl flex items-center justify-between mx-auto p-8'>
        <img src={logo} />
       <div onClick={toggleDarkMode} className='flex items-center'>
        <img   src={sunLogo} alt='sun logo' />
        <div className='h-10 mx-4 w-20 rounded-full cursor-pointer flex items-center px-1 bg-white'>
          <span className={`h-6 toggler mx-1 bg-lightCyan w-6 block rounded-full ${darkMode ? 'translate-x-11' :''}`}></span>
        </div>
        <img src={moonLogo} alt='moon logo' />
       </div>
     </div>
    </header>
  )
}

export default Header
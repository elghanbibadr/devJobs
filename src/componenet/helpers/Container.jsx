import React from 'react'
import Details from '../Details/Details'
import Home from '../Home/Home'
const Container = () => {
  return (
    <main className='bg-darkBlue'>
      <section className=" max-w-8xl p-8 mx-auto h-96">
      <Home/>
       <Details/>
      </section>
   </main>

   )
}

export default Container
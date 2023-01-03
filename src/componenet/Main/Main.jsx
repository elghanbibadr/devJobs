import React from 'react'
import Details from '../Details/Details'
import Home from '../Home/Home'
const Container = (props) => {
  return (
    <main className='container'>
      <Home/>
       <Details/>
    </main>
  )
}

export default Container
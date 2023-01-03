import React from 'react'
import AllJobs from './AllJobs/AllJobs'
import SearchBar from './SearchBar/SearchBar'

const Home = () => {
  return (
    <React.Fragment>
     <SearchBar/>
     <AllJobs/>
    </React.Fragment>
  )
}

export default Home
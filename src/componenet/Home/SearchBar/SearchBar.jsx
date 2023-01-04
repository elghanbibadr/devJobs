import React from 'react'
import Button from '../../helpers/Button'
const SearchBar = () => {
  return (
    <div className='card relative bottom-20 p-8 dark:bg-white'>
      <h1>SearchBar</h1>
      <Button text='Search' />
      <Button text='Company Site' bg='bg-paleBlue dark:bg-white dark:text-lightCyan ' />
    </div>
  )
}

export default SearchBar
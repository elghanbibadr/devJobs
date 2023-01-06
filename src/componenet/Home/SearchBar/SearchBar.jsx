import React ,{useState} from 'react'
import Button from '../../helpers/Button'
import searchLogo from '../../../assets/desktop/icon-search.svg'
import locationLogo from '../../../assets/desktop/icon-location.svg'
import filterLogo from '../../../assets/mobile/icon-filter.svg'
import SearchSvg from './SearchSvg'
import ModalOverlay from './ModalOverlay'

const SearchBar = () => {
  const [modalIsOpen,setModalIsOpen]=useState(false)


  const handleFilterClicked=()=>{
    setModalIsOpen(prv => !prv)
  } 

  const handleOverlayClicked=(e)=>{
    if (e.target.id==='overlay'){
      setModalIsOpen(false)
    }
  }
  return (
    <div className='card searchBar relative bottom-20 p-8 dark:bg-white'>

      <form  className='flex justify-between items-center'>
        <div className='input-field'>
           <img className='hidden md:inline-block' src={searchLogo} alt='search icon' />
          <input type='text' 
          placeholder='Filter by title' 
          />
        </div>
          <div className='flex items-center md:hidden'>
            <img onClick={handleFilterClicked}  src={filterLogo} alt='filter icon' />
                 <Button text={<SearchSvg/>} bg='px-7 ml-6 '/>
          </div>
          {/* modal and overlay goes here */}
            <ModalOverlay overlayClicked={handleOverlayClicked} modalIsOpen={modalIsOpen}>
            <div className="modal card md:flex items-center ">
              <div className={`input-field border-textColor border-b-2 p-10 px-10 ${!modalIsOpen ? 'hidden' :"flex items-center"} md:flex p-0 border-none `}>
                   <img  src={locationLogo} alt='search icon' /> 
                        <input type='text' 
                        placeholder='Filter by Location ...'  />
              </div>
              <div className='flex items-center p-14 md:p-0 '>
                <input type='checkbox' className='mr-4'/>
                <h5 className='text-white font-bold text-2xl'>Full Time</h5>
              </div>
              <Button  text='Search' bg='w-1/4 m-4 lg:relative left-40 '/>
            </div>
            </ModalOverlay>
    
      </form>
    </div>
  )
}

export default SearchBar
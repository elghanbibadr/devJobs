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
           <img className='hidden' src={searchLogo} alt='search icon' />
          <input type='text' 
          placeholder='Filter by title' 
          />
        </div>
          <div className='flex items-center'>
            <img onClick={handleFilterClicked} src={filterLogo} alt='filter icon' />
                 <Button text={<SearchSvg/>} bg='px-7 ml-6'/>
          </div>
          {/* modal and overlay goes here */}
            <ModalOverlay overlayClicked={handleOverlayClicked} modalIsOpen={modalIsOpen}>
            <div className="modal card">
              <div className={`input-field border-textColor border-b-2 p-10 px-10 ${!modalIsOpen ? 'hidden' :"flex"}`}>
                   <img  src={locationLogo} alt='search icon' /> 
                        <input type='text' 
                        placeholder='Filter by Location ...'  />
              </div>
            </div>
            </ModalOverlay>
      </form>
    </div>
  )
}

export default SearchBar
import React ,{useContext, useEffect, useRef, useState} from 'react'
import Button from '../../helpers/Button'
import { data } from '../../../constant/data'
import searchLogo from '../../../assets/desktop/icon-search.svg'
import locationLogo from '../../../assets/desktop/icon-location.svg'
import filterLogo from '../../../assets/mobile/icon-filter.svg'
import SearchSvg from './SearchSvg'
import ModalOverlay from './ModalOverlay'
import { AppContext } from '../../../store/AppContext'
const SearchBar = () => {
  const [modalIsOpen,setModalIsOpen]=useState(false);
  const [showErrorMsg,setShowErrorMsg]=useState(false);
  const {jobs,setJobs}=useContext(AppContext)
   const inputLocationRef=useRef();
   const inputTitleRef=useRef();
   const inputCheckRef=useRef();
   
  const handleFilterClicked=()=>{
    setModalIsOpen(prv => !prv)
  } 
  
  const handleOverlayClicked=(e)=>{
    if (e.target.id==='overlay'){
      setModalIsOpen(false)
    }
  }
  
  const handleFormSubmited=(e)=>{
    e.preventDefault();
    if (!inputLocationRef.current.value &&  !inputTitleRef.current.value && !inputCheckRef.current.checked){
      setShowErrorMsg(true)
    }else{
      if( inputLocationRef.current.value && inputLocationRef.current.value ){

        const filtered=data.filter(job=>{
        if(job.position.toLowerCase().includes(inputTitleRef.current.value.toLowerCase()) &&
          job.location.toLowerCase().includes(inputLocationRef.current.value.toLowerCase())  ){
            return job
          }})
          setJobs(filtered)
      }
      
    else if(  inputLocationRef.current.value ){
        const filtered=data.filter(job=>{
        if(job.location.toLowerCase().includes(inputLocationRef.current.value.toLowerCase())  ){
            return job
          }})
          setJobs(filtered)
      }
    else if(  inputTitleRef.current.value ){
        const filtered=data.filter(job=>{
        if(job.position.toLowerCase().includes(inputTitleRef.current.value.toLowerCase())  ){
            return job
          }})
          setJobs(filtered)
      }

    
      
       
     console.log(data)
    }
  }


  useEffect(()=>{
    setTimeout(()=>{
      setShowErrorMsg(false)
    },3000)
  },[showErrorMsg])

 
  //  console.log(inputCheckRef.current.checked)

  return (
    <>
    <div className='card searchBar relative bottom-20 p-8 dark:bg-white md:py-2 px-8 '>

      <form onSubmit={handleFormSubmited}  className='flex  justify-between items-center'>
        <div className='input-field flex items-center'>
          <img className='hidden md:inline-block' src={searchLogo} alt='search icon' />
          <input type='text' 
          placeholder='Filter by title' 
          ref={inputTitleRef}

          />
        </div>
          <div className='flex items-center md:hidden'>
            <img onClick={handleFilterClicked}  src={filterLogo} alt='filter icon' />
                 <Button type='submit' text={<SearchSvg/>} bg='px-7 ml-6 '/>
          </div>
          {/* modal and overlay goes here */}
            <ModalOverlay overlayClicked={handleOverlayClicked} modalIsOpen={modalIsOpen}>
            <div className="modal py-4 m-10  card md:flex items-center md:m-0 dark:bg-white ">
              <div className={`input-field border-textColor border-b-2 p-10 px-10 ${!modalIsOpen ? 'hidden' :"flex items-center"} md:flex md:p-0 md:border-none md:w-full md:relative left-20  `}>
                   <img  src={locationLogo} alt='search icon' /> 
                        <input type='text' 
                       ref={inputLocationRef}
                       placeholder='Filter by Location ...'  />
              </div>
              <div className='flex items-center my-10 md:p-0 w-1/2  '>
                <label  className="checkbox-Container">
                  <input type='checkbox' ref={inputCheckRef} className='mr-6'/>
                  <span class="checkmark"></span>
                  </label>
                <h5 className='text-white font-bold text-2xl dark:text-textColor'>Full Time</h5>
              </div>
              <Button   text='Search' bg='block mx-auto  w-3/4 mb-4 md:w-fit'/>
            </div>
            </ModalOverlay>
        
      </form>
    </div>
       {showErrorMsg && <p className='error-msg absolute  top-36'>Please fill out at least one input</p>}
            </>
  )
}

export default SearchBar
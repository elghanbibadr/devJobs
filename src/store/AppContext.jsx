import { data }  from '../constant/data';
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {

  const [isUserSelectJobId,setIsUserSelectJobId]=useState(undefined)
  const [userJobClickedJobDetails,setUserClickedJobDetails]=useState(undefined)
  const [jobs,setJobs]=useState(data)

    const value = {
      isUserSelectJobId,
      setIsUserSelectJobId,
      userJobClickedJobDetails,
      setUserClickedJobDetails,
      jobs,
      setJobs
       
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}
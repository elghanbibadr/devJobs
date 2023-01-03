import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {

  const [isUserSelectJob,setIsUserSelectJob]=useState(false)


    const value = {
      isUserSelectJob,
      setIsUserSelectJob
       
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {

  const [isUserSelectJobId,setIsUserSelectJobId]=useState(undefined)


    const value = {
      isUserSelectJobId,
      setIsUserSelectJobId
       
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}
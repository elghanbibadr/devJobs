import React  from "react"
import Header from "./componenet/Header/Header"
import { AppContextProvider } from "./store/AppContext"
import Wrraper from "./componenet/helpers/Wrraper"
function App() {

  return (
    <AppContextProvider>
      <Header />
      <Wrraper/>
    </AppContextProvider>

  )
}

export default App

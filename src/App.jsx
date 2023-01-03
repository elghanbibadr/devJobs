import React  from "react"
import Header from "./componenet/Header/Header"
import Container from "./componenet/helpers/Container"
import { AppContextProvider } from "./store/AppContext"
function App() {

  return (
    <AppContextProvider>
      <Header />
      <Container/>
    </AppContextProvider>

  )
}

export default App

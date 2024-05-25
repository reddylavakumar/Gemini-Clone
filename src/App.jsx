import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import ContextProvider from './context/context'

const App = () => {
  return (
    <>
    <React.StrictMode>

    <ContextProvider>

    <Sidebar/>
    <Main/>
    </ContextProvider>
    </React.StrictMode>

    </>
  )
}

export default App
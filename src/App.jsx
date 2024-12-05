import { useState, useContext, createContext } from 'react'
import './App.css'
import Count from './components/Count'
import Main from './components/Main'

export const Context = createContext()

function App() {

  const [gift, setGift] = useState("Rolex Daytona")
  const [realGift, setRealGift] = useState("getting a dev job")


  return (
    <>
      <Count />
      <Context.Provider value={[realGift, setRealGift]}>
        <Main gift={gift} />
      </Context.Provider>
    </>
  )
}

export default App

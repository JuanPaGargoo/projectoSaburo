import { useState } from 'react'
import NavbarSaburo from './components/NavbarSaburo'
import ClothingCard from './components/ClotingCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarSaburo/> 
     <ClothingCard/>
    </>
  )
}

export default App

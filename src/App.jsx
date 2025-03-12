import { useState } from 'react'
import NavbarSaburo from './components/NavbarSaburo'
import MediaSpot from './components/MediaSpot'
import ClothingCard from './components/ClotingCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarSaburo/> 

      <MediaSpot/>
      <ClothingCard/>

    </>
    
  )
}

export default App

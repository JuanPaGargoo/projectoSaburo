import { useState } from 'react'
import NavbarSaburo from './components/NavbarSaburo'
import MediaSpot from './components/MediaSpot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarSaburo/> 
      <MediaSpot/>
    </>
    
  )
}

export default App

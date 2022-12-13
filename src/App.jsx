import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './components/User'
import Tlibre from './components/Tlibre'
import Comida from './components/Comida'
import Stack from './components/Stack'
import Hob from './components/Hob'

function App() {
  const [count, setCount] = useState(0)




  return (

    <div className="App">
    
    <div className='app'>

    
      <div className="card"><User/></div>
<div className='card2'> <Tlibre/></div>
<div className='card3'> <Comida/></div>
<div className='card4'> <Stack/></div>
<div className='card5'> <Hob/></div>
</div>
    </div>
  )
}

export default App

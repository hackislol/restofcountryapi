import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header/Header'
import Countriess from './componets/Countries/Countriess'

function App() {
  

  return (
    <>
     <div className='container mx-auto mt-6'>
      
     <Header></Header>

     <div>
     <Countriess></Countriess>
     </div>
     </div>
      
    </>
  )
}

export default App

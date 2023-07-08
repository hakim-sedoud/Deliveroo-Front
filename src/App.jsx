import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Restaurent from './component/Restaurent'
import Menu from './component/Menu'

function App() {

  return (
    <div>
      <Header/>
      <Restaurent/>
      <Menu/>
    </div>
  )
}

export default App

import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import './App.css'

function App() {

  const [darkmode, setDarkmode]= useState(true)

  function handleclick(){
    setDarkmode(prevstate=>!prevstate)
  }
  

  return (
    <div className="App">
      <Header darkmode={darkmode} handleClick={handleclick} />
    <Main darkmode={darkmode}/>
    </div>
  )
}

export default App

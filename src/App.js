import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import { actions } from "./urls";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost url={actions} title='Action' />
    </div>
  )
}

export default App
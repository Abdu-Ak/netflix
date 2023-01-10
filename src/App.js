import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import { actions, originals } from "./urls";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={actions} title='Action' isSmall/>
    </div>
  )
}

export default App
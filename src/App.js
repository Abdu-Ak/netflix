import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import { actions, comedy, documentry, horror, romance, trending } from "./urls";
import Footer from './Components/Footer/footer'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost url={trending} title='Trending' />
      <Rowpost url={actions} title='Action' isSmall />
      <Rowpost url={comedy} title='Comedy' isSmall/>
      <Rowpost url={horror} title='Horror'isSmall />
      <Rowpost url={romance} title='Romance' isSmall/>
      <Rowpost url={documentry} title='Documentry' isSmall />
      <Footer/>
    </div>
  )
}

export default App
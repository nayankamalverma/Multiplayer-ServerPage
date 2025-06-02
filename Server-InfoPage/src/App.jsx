import React from 'react'
import './App.css'
import './index.css'
import LeftBar from './components/LeftBar'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Center from './components/Center'

const App = () => {
  return (
    <div className='uppercase rajdhani-semibold bg-[url("./assets/1395713.jpg")] h-[130vh] w-full bg-center bg-cover'>
      <div className='relative bg-gray-800 opacity-80 h-[130vh] backdrop-blur-3xl pt-0.1'>
      <Navbar />
      <LeftBar />
      <Sidebar />
      <Center />
      </div>
    </div>
  )
}

export default App
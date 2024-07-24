import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import BannerHighlights from './components/BannerHighlights'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='overflow-hidden '>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
import React from 'react'
import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import Services from './components/Services'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <Services/>
    </div>
  )
}

export default App
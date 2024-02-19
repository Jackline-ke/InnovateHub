import React from 'react'
import About from './components/About'
import Case from './components/Case'
import Contact from './components/Contact'
import Features from './components/Features'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import Services from './components/Services'
import Testimonals from './components/Testimonals'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <Services/>
      <Testimonals/>
      <Case/>
      <Contact/>
    </div>
  )
}

export default App
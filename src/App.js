import React from 'react'
import About from './components/About'
import Blog from './components/Blog'
import Case from './components/Case'
import Contact from './components/Contact'
import Contact1 from './components/Contact1'
import Features from './components/Features'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import Organizations from './components/Organizations'
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
      <Contact1/>
      <Organizations/>
      <Blog/>
    </div>
  )
}

export default App
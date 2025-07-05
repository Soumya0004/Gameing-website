
import React from 'react'
import Hero from './Component/Hero'
import About from './Component/About'
import Navbar from './Component/Navbar'
import Features from './Component/Features'
import Story from './Component/Story'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
    </main>
  )
}

export default App
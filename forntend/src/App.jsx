
import React from 'react'
import Hero from './Component/Hero'
import About from './Component/About'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
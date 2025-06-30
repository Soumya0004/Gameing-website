
import React from 'react'
import Hero from './Component/Hero'
import About from './Component/About'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
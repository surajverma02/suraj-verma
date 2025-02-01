import React from 'react'
import Home from './Home/Home'
import About from './Home/About'
import Work from './Home/Work'
import Contact from './Home/Contact'
import Skill from './Home/Skill'

function Main() {
  return (
    <main className='my-16 w-full'>
        <Home />
        <About />
        <Skill />
        <Work />
        <Contact />
    </main>
  )
}

export default Main
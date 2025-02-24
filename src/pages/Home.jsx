import React from 'react'
import Herosection from '../components/Herosection'
import AboutSection from './About'
import Works from './Works'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Herosection />
      <AboutSection />
      <Works />
      <Contact />
    </div>
  )
}

export default Home

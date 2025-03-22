import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Results from './components/Results'
import { TimelineDemo } from './components/TimelineDemo' // or StickyScrollRevealDemo
import PersonalNote from './components/PersonalNote'
import Differentiators from './components/Differentiators'
import Process from './components/Process'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>


        <Hero />
        <WhatWeDo />
        <Results />
        <TimelineDemo /> {/* or StickyScrollRevealDemo */}
        <PersonalNote />
        <Differentiators />
        <Process />
        <Guarantee />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

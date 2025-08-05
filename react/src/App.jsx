import { useState } from 'react'
import TopHeader from './components/topHeader'
import Hero from './components/hero'
import BottomHeader from './components/bottomHeader'
import Services from './components/services'
import HowItWorks from './components/howItWorks'
import { VelocityText } from './components/velocityText'

const App =() =>{
  return(
    <>
      <TopHeader />
      <Hero />
      <Services />
      <VelocityText />
      <HowItWorks />
      <BottomHeader />
    </>
  )
}
export default App

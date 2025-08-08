import { useState } from 'react'
import TopHeader from './components/topHeader'
import Hero from './components/hero'
import BottomHeader from './components/bottomHeader'
import Services from './components/services'
import HowItWorks from './components/howItWorks'
import { VelocityText } from './components/velocityText'
import Projects from './components/projects'
import Team from './components/team'
import FooterScaleSection from './components/footerSection'

const App =() =>{
  return(
    <>
      <TopHeader />
      <Hero />
      <Services />
      <VelocityText />
      <HowItWorks />
      <Projects />
      <Team />
      <FooterScaleSection />
      <BottomHeader />
    </>
  )
}
export default App

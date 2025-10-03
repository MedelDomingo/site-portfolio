import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import BannerSection from './sections/BannerSection/BannerSection';
import SampleWorks from './sections/SampleWorks/SampleWorks';
import ContactMe from './sections/ContactMe/ContactMe';
import AboutSection from './sections/AboutSection/AboutSection';
import TechnicalKnowledge from './sections/TechnicalKnowledge/TechnicalKnowledge';

import './App.css'

function App() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <TechnicalKnowledge />
      <SampleWorks />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App;

import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Info from '@/components/Info'
import React from 'react'
import WorksSection from '@/components/WorkSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Info/>
      <WorksSection/>
      <ExperienceSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default page
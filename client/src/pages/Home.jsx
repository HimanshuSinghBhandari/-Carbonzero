import React from 'react'
import HeroSection from '../components/(frontend)/(Landing Page)/Herosection'
import WhoWeAre from '../components/(frontend)/(Landing Page)/whoweare'
import ProductImpact from '../components/(frontend)/(Landing Page)/productimpact'
import InnovationShowcase from '../components/(frontend)/(Landing Page)/InnovativeandUnique'
import Footer from '../components/(frontend)/(Landing Page)/Footer/footer'

const Home = () => {
  return (
    <div className='bg-[#f4f9fd]'>
        <HeroSection/>
        <WhoWeAre/>
        <ProductImpact/>
        <InnovationShowcase/>
        <Footer/>
    </div>
  )
}

export default Home
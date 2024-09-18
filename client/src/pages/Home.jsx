import React from 'react'
import HeroSection from '../components/(frontend)/(Landing Page)/Herosection'
import WhoWeAre from '../components/(frontend)/(Landing Page)/whoweare'

const Home = () => {
  return (
    <div className='bg-[#f4f9fd]'>
        <HeroSection/>
        <WhoWeAre/>
    </div>
  )
}

export default Home
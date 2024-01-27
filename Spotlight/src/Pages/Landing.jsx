import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Highlights from '../Components/Highlights/Highlights'
import Search from '../Components/Search/Search'

const Landing = () => {
  return (
    < >
    <div className="flex flex-col items-center">
    <Navbar/>
    <Search/>
    <Hero/>
    <Highlights/>
    </div>
    </>
  )
}

export default Landing
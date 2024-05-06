import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Highlights from '../Components/Highlights/Highlights'
import Search from '../Components/Search/Search'

const Landing = () => {
  return (
    < >
    <div className="">
    <Navbar/>
    <div className="divider divider-horizontal"></div>
    <Search/>
    <div className="divider"></div>
    <Hero/>
    <div className="divider"></div>

    <Highlights/>
    </div>
    </>
  )
}

export default Landing
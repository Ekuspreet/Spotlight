import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <section className="">
	<div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-28 md:px-20">
		<h1 className="text-3xl font-bold md:text-5xl">Where Ideas  
			<span className="text-primary"> Shine Bright </span> and Projects Take Center Stage!
		</h1>
		<p className="px-5 mt-4 mb-8 text-md">Dazzle the world with your brilliance! 🌟 Join Spotlight and share your projects, because your creativity deserves a standing ovation. <span className="text-primary">#SpotlightProjects #IgniteInnovation</span></p>
		<div className="flex flex-wrap justify-center">
        <Link to='/signup' > <button className="btn btn-primary">Get Started Now !</button></Link>
			</div>
	</div>
</section>
  )
}

export default Hero
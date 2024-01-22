import React from 'react'
import BrandLogo from '../../assets/1.png'
const Navbar = () => {
    return (
        <>

            <div className="navbar">

                


                <div className="navbar-start">
                <div className="dropdown-container justify-end">
                    <div className="dropdown">
                        <label className="btn btn-ghost md:hidden" tabindex="0">
                            <span class="material-symbols-outlined">
                                menu
                            </span>
                        </label>
                        <div className="dropdown-menu dropdown-menu-bottom-right">
                            {/* <a className="dropdown-item text-md">Profile</a> */}
                            <a tabindex="-1" className="dropdown-item text-sm my-1">Home</a>
                            <a tabindex="-1" className="dropdown-item text-sm my-1">About</a>
                            <a tabindex="-1" className="dropdown-item text-sm my-1">Contact</a>
                            <a tabindex="-1" className="dropdown-item text-sm my-3 btn-primary text-center">Log In</a>
               

                        </div>
                    </div>
                </div>
                    <div className="navbar-item">
                        <img src={BrandLogo} className=" -ml-6 md:m-0 min-w-40 w-48" alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden md:block">
                    <a class="btn btn-ghost navbar-item text-lg">Home</a>
                    <a class=" btn btn-ghost navbar-item text-lg">About</a>
                    <a class="btn btn-ghost navbar-item text-lg">Contact</a>
                </div>

                <div className="navbar-end">
                    <a class="btn btn-outline-primary navbar-item w-20 md:w-24  mx-1 md:block hidden">Login</a>
                    <a class="btn  btn-primary navbar-item md:w-24 w-20 mx-1  h-8 md:h-10  ">Sign Up</a>

                </div>
            </div>


            <section className="">
	<div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-28 md:px-20">
		<h1 className="text-4xl font-bold leadi sm:text-5xl">The Place To  
			<span className="text-primary"> Post</span> Your Projects!
		</h1>
		<p className="px-5 mt-4 mb-8 text-sm">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
		</div>
	</div>
</section>
        </>
    )
}

export default Navbar
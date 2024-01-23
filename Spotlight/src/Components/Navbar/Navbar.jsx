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
                    <a class="btn btn-outline-primary navbar-item  mx-1  md:block hidden">Login</a>
                    <a class="btn  btn-primary navbar-item  mx-1 sm:btn-md btn-sm ">Sign Up</a>

                </div>
            </div>


          
        </>
    )
}

export default Navbar
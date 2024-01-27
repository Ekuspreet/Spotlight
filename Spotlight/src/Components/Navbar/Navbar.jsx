import React from 'react'
import BrandLogo from '../../assets/1.png'
import { Link } from "react-router-dom";
const Navbar = ( ) => {
    return (
        <>

            <div className="navbar ">
                <div className="navbar-start">
                <div className="dropdown-container justify-end">
                    <div className="dropdown">
                        <label className="btn btn-ghost btn-xs md:hidden " tabIndex="0">
                            <span class="material-symbols-outlined">
                                menu
                            </span>
                        </label>
                        <div className="dropdown-menu dropdown-menu-bottom-right mt-2 ">
                            {/* <a className="dropdown-item text-md">Profile</a> */}
                            <a tabIndex="-1" className="dropdown-item text-sm my-1">Home</a>
                            <a tabIndex="-1" className="dropdown-item text-sm my-1">About</a>
                            <a tabIndex="-1" className="dropdown-item text-sm my-1">Contact</a>
                           <Link to="login" > <a tabIndex="-1" className="dropdown-item text-sm my-3 btn-primary text-center">Log In</a> </Link>
               

                        </div>
                    </div>
                </div>
                    <div className="navbar-item">
                        <img src={BrandLogo} className=" -py-6 md:m-0 min-w-28 w-48" alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden md:block">
                    <a class="btn btn-ghost navbar-item text-lg">Home</a>
                    <a class=" btn btn-ghost navbar-item text-lg">About</a>
                    <a class="btn btn-ghost navbar-item text-lg">Contact</a>
                </div>

                <div className="navbar-end">
                   <Link to="login"> <a class="btn btn-outline-primary navbar-item  mx-1  md:block hidden">Login</a> </Link>
                   <Link to = "signup" > <a class="btn  btn-primary navbar-item  mx-1 sm:btn-md btn-sm  ">Sign Up</a> </Link>

                </div>
            </div>


          
        </>
    )
}

export default Navbar
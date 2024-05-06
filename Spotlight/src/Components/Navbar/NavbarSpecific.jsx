import React from 'react'
import BrandLogo from '../../assets/1.png'
import {Link} from "react-router-dom"

const NavbarSpecific = ({ pagename, backmessage }) => {
  return (
    <>

<div className="navbar navbar-glass navbar-no-boxShadow" style={{background:"transparent"}}>

    <div className="navbar-start">
        <div className="navbar-item">
        <img src={BrandLogo} className=" md:m-0 w-24" alt="" />

        </div>

    </div>
    <div className="navbar-center text-sm font-bold text-center md:text-3xl ">
       <h1>{pagename}</h1>
       </div>
       
    <div className="navbar-end">
    
       <Link className='btn btn-outline-error navbar-item  btn-sm md:btn-lg mx-1' to="/" >  {backmessage}</Link>

    </div>
</div>



</>


  )
}

export default NavbarSpecific
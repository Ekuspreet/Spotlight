import React from 'react'
import BrandLogo from '../../assets/1.png'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const NavbarProfile = ({username}) => {
  const navigate = useNavigate()
	function logout(){
	Cookies.remove('token')
	navigate("/")
  }
	
	return (
   <>
               <div className="navbar navbar-glass navbar-no-boxShadow" style={{background:"transparent"}}>

	<div className="navbar-start">
	<img src={BrandLogo} className=" md:m-0 w-24" alt="" />


	</div>

	<div className="navbar-end">
		<div className="avatar avatar-ring avatar-xl">
			<div className="dropdown-container">
				<div className="dropdown">
					<label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
						<img src={`https://ui-avatars.com/api/?name=${username}&background=8c52ff&color=fff1b9&bold=true`}  alt="avatar" />
					</label>
					<div className="dropdown-menu dropdown-menu-bottom-left ">
						<a tabIndex={"-1"} className="dropdown-item text-sm">Profile</a>
						<a tabIndex="-1" className="dropdown-item text-sm">Account settings</a>
						<a tabIndex="-1" className="dropdown-item text-sm">Subscriptions</a>
						<button tabIndex="-1" className="btn btn-error mt-2" onClick={logout}>Log Out</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</>
  )
}

export default NavbarProfile
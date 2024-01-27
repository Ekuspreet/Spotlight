import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import NavbarSpecific from '../Components/Navbar/NavbarSpecific'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { Axios } from 'axios'
const Login = () => {

    const [loginData,setLoginData] = useState({
        email : "",
        password : "",
    });
    

    function handleLoginForm(event){
        

        setLoginData(
            {
                ...loginData,
                [event.target.name] : event.target.value
            }
        );
    }


     function handleSubmit(){
        
            
            const response = Axios.post('http://localhost:8000/login', loginData);
      
            console.log('Form data sent successfully', response.data);
            // Handle success as needed
        };
    

    return (
    <>
    <NavbarSpecific
    pagename= "Welcome Back!"
    backmessage = "<--"
    />
    
    <div className="m-6 mx-auto max-w-lg min-w-fit  flex  flex-col justify-center gap-6">
	<div className="flex flex-col justify-center items-center">
		<h1 className="text-3xl font-semibold">Log In</h1>
		<p className="text-sm">Log In to access your Account</p>
	</div>

        <form className='form-group' action="#" onSubmit={handleSubmit} >
        <div className="form-field">
			<label className="form-label">Email address</label>

			<input type="email" name='email' value = {loginData.email} onChange={handleLoginForm} className="input max-w-full" required />
            </div>
        <div className="form-field">
			<label className="form-label">Password</label>

			<input type="password" name='password' value={loginData.password} onChange={handleLoginForm} className="input max-w-full" required />
            </div>

        
        <div className="form-field pt-5">
			<div className="form-control justify-between">
				<input type='submit'  className="btn btn-primary w-full" value={"LOG IN"} />
			</div>
		</div>
        </form>

        <div className="form-field">
			<div className="form-control justify-center">
			<Link to='/signup' >	<a className="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</a></Link>
			</div>
		</div>

    </div>

    </>
    
    )
}

export default Login
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import NavbarSpecific from '../Components/Navbar/NavbarSpecific'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import  axios  from 'axios'
import { useNavigate } from "react-router-dom";
import Message from '../Components/Alerts/Message'
import Cookie from 'js-cookie'
const Login = () => {
    const navigate = useNavigate()
    const [loginData,setLoginData] = useState({
        email : "",
        password : "",
    });
    const [message,setMessage] = useState({
        display : "hidden",
        message : "",
        type : "error"
    }
    )

    function handleLoginForm(event){
        
        
        setLoginData(
            {
                ...loginData,
                [event.target.name] : event.target.value
            }
        );
    }

    function closeButton(){
        
        setMessage(
            { ...message,
                display : "hidden"
                }
        );
}
     async function handleSubmit(e){
        e.preventDefault();
      try{      
     const response = await axios.post('/api/login', loginData)
     
        setMessage({
            display : "block",
            message : response.data.message,
            type : response.data.type              })
        
        console.log(response.data);
        if(response.data.type == "success"){
        setTimeout(()=>{
            
            Cookie.set('token', response.data.token,{expires : 7})
            navigate('/profile')

        },500)}
        
    }catch(error){
        console.error('Error sending form data', error);
        // Handle error as needed
    }};
    

    return (
    <>
    <NavbarSpecific
    pagename= "Welcome Back!"
    backmessage = "<--"
    />
    <div className="divider"></div>
    
    <div className="m-6 mx-auto max-w-lg min-w-fit  flex  flex-col justify-center gap-6">
	<div className="flex flex-col justify-center items-center">
		<h1 className="text-3xl font-semibold">Log In</h1>
		<p className="text-sm">Log In to access your Account</p>
	</div>

        <form className='form-group' action='#' onSubmit={handleSubmit} >
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
			
            <Link to='/signup' className="link link-underline-hover link-primary text-sm" >Don't have an account yet? Sign up.</Link>	
			</div>
		</div>

        <Message 
        visibility = {message.display}
        btnclose = {closeButton}
        type={message.type}
        alertmessage={message.message}
        />

    </div>

    </>
    
    )
}

export default Login
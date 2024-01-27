import React from 'react'
import {Link, redirect} from 'react-router-dom'
import NavbarSpecific from '../Components/Navbar/NavbarSpecific'
import { useState } from 'react'
import Axios from 'axios'
import Message from '../Components/Alerts/Message'
const Signup = () => {

    const [signUpData,setSignUpData] = useState({
        email : "",
        password : "",
        name : "",
        cnfpassword : ""
    });

    const [message,setMessage] = useState({
        display : "hidden",
        message : "",
        type : "success"
    }
    )
    // Type : Success or Error
    

    function handleSignUpForm(event){
       

        setSignUpData(
            {
                ...signUpData,
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
    function handleSubmit(e) {
        e.preventDefault();
       
        if (!(signUpData.password == signUpData.cnfpassword)){
            
            setMessage({
                type : "error",
                display : "block",
                message : "Passwords Do Not Match"
            })
            return;
        }

        if(!(signUpData.password.length >8)){
            setMessage({
                type : "error",
                display : "block",
                message : "Password Should Be At Least 8 Characters Long"
            })
            return;
        

        }

        
        Axios.post('http://localhost:8000/signup', signUpData)
            .then(response => {
                console.log('Form data sent successfully', response.data);
                redirect
            })
            .catch(error => {
                console.error('Error sending form data', error);
                // Handle error as needed
            });
    }
    



    return (
    <>
    <NavbarSpecific
    pagename= "Welcome to Spotlight"
    backmessage = "<--"
    />
    
    <div className=" m-6 mx-auto max-w-lg min-w-fit  flex  flex-col justify-center gap-6 ">
	<div className="flex flex-col items-center justify-center">
		<h1 className="text-3xl font-semibold">Sign Up</h1>
		<p className="text-sm">Sign Up to create an Account</p>
	</div>

        <form className='form-group' action="#" onSubmit={handleSubmit} >
        <div className="form-field">
			<label className="form-label">Email address </label>

			<input type="email" name='email' value = {signUpData.email} onChange={handleSignUpForm} className="input max-w-full" required />
            </div>

            
        <div className="form-field">
			<label className="form-label">Name</label>

			<input type="text" name='name' value = {signUpData.name} onChange={handleSignUpForm} className="input max-w-full" required />
            </div>


        <div className="form-field">
			<label className="form-label">Password</label>

			<input type="password" name='password' value={signUpData.password} onChange={handleSignUpForm} className="input max-w-full" required />
            </div>
        <div className="form-field">
			<label className="form-label">Confirm Password</label>

			<input type="text" name='cnfpassword' value={signUpData.cnfpassword}  onChange={handleSignUpForm} className="input max-w-full" required />
        </div>

       

        <div className="form-field pt-5">
			<div className="form-control justify-between">
				<input type='submit' className="btn btn-primary w-full" value={"SIGN UP"} />
			</div>
		</div>
        </form>
        <div className="form-field">
			<div className="form-control justify-center">
				<Link to="/login" ><a className="link link-underline-hover link-primary text-sm">Already Have An Account? Log In.</a></Link>
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

export default Signup
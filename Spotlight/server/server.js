const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const UserModel = require('./user.model');
const { redirect } = require('react-router-dom');
const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config();
const uri = process.env.CONNECTION_URL;
mongoose.connect(uri)
.then(()=>{
    console.log("Connected successfully")

}).catch(err =>{
    console.log(err,"No Connection")
})



  // Save the user to the database

app.get('/message', (req, res) => {
    res.json({ message: "Search Projects From Database" });
});

app.post('/login', async (req, res) => {
    // Access form data from the request body
    const loginData = req.body;
    let userexist = await UserModel.findOne({email:loginData.email,password:loginData.password});
    if(!userexist){
        res.send({
            message : "Invalid Email or Password",
            type : "error"
        })
    }
    // Handle the form data as needed
    console.log(loginData);
  
    // Send a response
    res.send('Form data received successfully!');
  });


  app.post('/signup', async (req, res) => {
    try {
        // Access form data from the request body
        const signupData = req.body;
        
        let userexist = await UserModel.findOne({email:signupData.email});

        if( userexist){

        return res.send({
            message : "User Already Exists, Please Create A New Account ",
            type : "error"
        })
    }
        


        // Create a new user instance
        const newUser = new UserModel({
            name: signupData.name,
            email: signupData.email,
            password: signupData.password
        });

        // Save the user to the database using await
        await newUser.save();

        // Send a success response
        res.send({
            message : "Congratulations, Account Created Successfully!",
            type : "success"
        });
       
    } catch (error) {
        // Handle the error, e.g., log it
        console.error('Error saving user:', error);

        // Send an error response
        res.status(500).send('Internal Server Error');
    }
});

    
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
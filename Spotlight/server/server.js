const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const UserModel = require('./user.model')
const app = express();

app.use(cors());
app.use(express.json());


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

app.post('/login', (req, res) => {
    // Access form data from the request body
    const loginData = req.body;
  
    // Handle the form data as needed
    console.log(loginData);
  
    // Send a response
    res.send('Form data received successfully!');
  });
  app.post('/signup', async (req, res) => {
    try {
        // Access form data from the request body
        const signupData = req.body;

        // Create a new user instance
        const newUser = new UserModel({
            name: signupData.name,
            email: signupData.email,
            password: signupData.password
        });

        // Save the user to the database using await
        await newUser.save();

        // Send a success response
        res.send('User registered successfully!');
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
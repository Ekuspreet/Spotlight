const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const UserModel = require('./user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express();

app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST", "PUT", "DELETE"],
     
    })
  );
app.use(express.json());
app.use(cookieParser())
require('dotenv').config();
const uri = process.env.CONNECTION_URL;
mongoose.connect(uri)
    .then(() => {
        console.log("Connected successfully")

    }).catch(err => {
        console.log(err, "No Connection")
    })



// Save the user to the database
app.post('/signup', async (req, res) => {
    try {
        // Access form data from the request body
        const signupData = req.body;

        let userexist = await UserModel.findOne({ email: signupData.email });

        if (userexist) {

            return res.send({
                message: "User Already Exists, Please Create A New Account ",
                type: "error"
            })

        }

        // Create a new user instance
        const newUser = new UserModel({
            name: signupData.name,
            email: signupData.email,
            password: await bcrypt.hash(signupData.password,13)
        });

        // Save the user to the database
        await newUser.save();   
        console.log("Saved")
        // Send a success response
        res.send({
            message: "Congratulations, Account Created Successfully!",
            type: "success"
        });

    } catch (error) {
        // Handle the error
        console.error('Error saving user:', error);

        // Send an error response
        res.status(500).send('Internal Server Error');
    }
});

// verify if the user is logged in 

app.post('/login', async (req, res) => {
    // Access form data from the request body
    try{
    const loginData = req.body;
    let userexist = await UserModel.findOne({ email: loginData.email});
     
    if (!userexist) {
        return res.send({
            message: "Account with the email doesn't exist. Please Create One.",
            type: "error"
        });
    }

    let correct_user = await bcrypt.compare(loginData.password, userexist.password)
    console.log(correct_user)
    if (!correct_user) {
        return res.send({
            message: "Invalid Email or Password",
            type: "error"
        })
    }

    return res.send({
        message: "Successfully Logged In",
        type: "success",
        //authentication step here
        token : jwt.sign({ userId : userexist._id},"jwt-secret-key")
    });
} catch(error)
{
//
}
});


app.get('/profile', async (req,res) =>{
console.log(req)
    const token = await req.cookies.token
    console.log(req.cookies.token);
    const userid = jwt.verify(token, 'jwt-secret-key');
    console.log(userid)
    if(!userid){
        res.send({message: 'INVALID TOKEN'})
    }
    user = await UserModel.findById(userid.userId)
    res.send(user)

});




app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require('mongoose')
const customerRouter = require("./Routes/CustomerRouter");

// const DBurl = "mongodb+srv://novdevtechsolution:Worldkillz1@novdev.j0zeutp.mongodb.net/?retryWrites=true&w=majority"

//Establis a connection to the DB

const connectDb = async () => {
    try{
        // await mongoose.connect(DBurl);
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(PORT, () =>{
            console.log(`Server runing on port : ${PORT}...`);
        });
        // console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
};
connectDb();

//Middlewares
app.use(express.json())

const requestLogger = (req, res, next)=> {
    const logger = {
        url: req.url,
        method: req.method,
        year: new Date().getFullYear(),
    };
    console.log(logger);
    next();
};
app.use(requestLogger);


const auth =(req, res, next) => {
    const isLoggedin = false;
    if (isLoggedin) {
        next();
    } else{
        res.status(401).send("<h1>NOT AUTHORIZED</h1>")
    }
};

app.use('/api/customers', customerRouter);







//Routes & Responses

app.get("/", (req, res) =>{
    // res.send("<h1>WELCOME TO HOME PAGE</h1>")
    res.status(200).send("<h1>WELCOME TO HOME PAGE</h1>")
    
})

app.get("/Contact", (req, res) =>{
    // res.send("<h1>Contact Form</h1>")
    res.status(200).send("<h1>Contact Form</h1>")
})
app.get("/Dashboard", auth, (req, res) =>{
    // res.send("<h1>Contact Form</h1>")
    res.status(200).send("<h1>DASHBOARD</h1>")
})


//Error Routes

app.get("*", (req, res) =>{
    // res.send("<h1>ERROR PAGE</h1><a href= '/'>HOME PAGE</a>")
    res.status(404).send("<h1>ERROR PAGE</h1><a href= '/'>HOME PAGE</a>")
})

// app.listen(PORT, () =>{
//     console.log(`Server runing on port : ${PORT}...`);        This was taken back to the top where you ave the connectDb functions
// });



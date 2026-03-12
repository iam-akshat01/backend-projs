const express= require("express");
const app=express;

const dotenv = require("dotenv");
dotenv.config();

const cors= require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// connect database 

// routes

// use routes in app 


const PORT= process.env.PORT ;
app.get('/', (req,res)=>{
    console.log("server running");
});
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

import Express from 'express'
const app= Express();
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose'

app.use(Express.json());
app.use(cors());
//mongoose.connect(process.env.MONGO_URL)

app.get('/',(req,res)=>{
    res.send("server running")
})

app.listen(3000, ()=>{
    console.log("server working perfectly allright");
})

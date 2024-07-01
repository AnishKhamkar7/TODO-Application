import express, { urlencoded } from "express"
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";

dotenv.config({
    path: "./.env"
})
const app = express()

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message: " HELLEOOEOE THERER"
    })
    
})

//routes

import todoroutes from "./routes/todo.routes.js"

app.use('/api/v1/todo',todoroutes)

connectDB()
.then(()=>{
    app.listen(`${process.env.PORT}`,()=>{
        console.log(`Serever is running at ${process.env.PORT}!!!!`);
    })
})
.catch((err)=>{
    console.log("Mongo Not connected",err);
})

export {app}





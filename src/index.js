// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(); // or dotenv.config({ path: "./.env" });

connectDB()
.than(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port ${process.env.PORT }`);
    })
})
.catch((err)=> {
    comsole.log("mongodb connecetion falied !!",err);
})




// import mongoose from 


// import express from "express";

// const app=express();
// ( async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("Error ,error");
//         throw error;
//        })

//        app.listen(process.env.PORT,()=>{
//      console.log(`app is listening to port $ {process.env.PORT}`);
//     })
// }
//     catch (error) {
//         console.log("Error connecting to MongoDB", error);
//         throw error;
//     }   
// })()
const express=require("express")
const app=express()



app.get("/",(req,res)=>{res.send("this is first srever page")})


app.listen(5000,()=>{console.log("server is running at port number 5000")})
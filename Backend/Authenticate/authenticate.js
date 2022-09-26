const Sign =require("../Schema/Signup_schema")
require("../Server/auth")
const cookieParser =require('cookie-parser')
const express=require("express")
const app=express()
app.use(cookieParser())

const jwt=require("jsonwebtoken")

const authenticate=async(req,res,next)=>{
   try{
      const token =req.cookies.jwt_token;
      console.log("this is token : ",token)
      const verifyToken=jwt.verify(token,"adityamahajanfromreaaaaa")
      console.log("this is verify token",verifyToken)

      const rootUser=   await Sign.findOne({"tokens.token":token})
      if(!rootUser){
         throw new  Error("User not found")
     }

     req.token=token;
     req.rootUser=rootUser;
     req.UserId=rootUser._id;

     next()
   }catch(err){
      res.status(401).send('Unauthorized:token not provided')
       console.log(err)

   }
}

module.exports=authenticate
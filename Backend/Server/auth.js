const express = require('express')
const router = express.Router()
require('../Database/Conn')
const Sign=require('../Schema/Signup_schema')
const Car=require('../Schema/Rent_form')
const app=express()

const { json } = require('express')
const { model } = require('mongoose')
const { castObject } = require('../Schema/Signup_schema')








// car form filling from owner /car url

router.post("/car",(req,res)=>{
    console.log(req.body)
    console.log("Car details")
    const {owner_name,vehicle_name,vehicle_no, start_time,end_time,rent,address}=req.body;
    if(!owner_name||!vehicle_name||!start_time||!vehicle_no||!end_time||!rent||!address){
        res.status(422).json({err:"fill the data first"})
    }
    else{ 
        const car=new Car({owner_name,vehicle_name,vehicle_no, start_time,end_time,rent,address})
        Sign.findOne({name:owner_name,function(err,found){
            found.carform.push(car);
            found.save();
            }
            })
            
          
        car.save().then(()=>{
            res.status(201).json({message:"data stored successfully"})
        }).catch((err)=>{res.status(500).json({err:"unable to store data"})})
        
    }

})


// regestration of user in the /Signup url

router.post("/signup",(req,res)=>{
    console.log(req.body)
    console.log("signup  page")

    const { name,address,age,gender,occupation,phone,gmail,adhar,password,cpassword}=req.body;

    if(!name || !address ||!age || !gender ||!occupation ||!phone||!gmail||!adhar||!password||!cpassword){
        return res.status(422).json({error:"fill the data first"})}
    
    Sign.findOne({gmail:gmail}).then((user)=>{
        if(user){
            return res.status(423).json({ error: "User already exist" })
        }
        if(password!=cpassword){
            return res.status(425).json({error:"check the password"})
        }else{
            const sign= new Sign({name,address,age,gender,occupation,phone,gmail,adhar,})

            sign.save().then(()=>{
                res.status(201).json({ messsage: "saved successfully" })
            })
        }
    }).catch((err)=>{
        res.status(500).json({ message: "not saved" })  
    })

    
  
    }
)





module.exports = router
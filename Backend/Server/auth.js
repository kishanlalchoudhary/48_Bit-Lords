const express = require('express')
const router = express.Router()
require('../Database/Conn')
const Sign=require('../Schema/Signup_schema')
const Car=require('../Schema/Rent_form')
const app=express()
const authenticate=require('../Authenticate/authenticate')
const { json } = require('express')
const { model } = require('mongoose')
const { castObject, bulkWrite } = require('../Schema/Signup_schema')
const uplode =require('../Authenticate/Uplode')
const client=require('twilio')('ACbd0ef1c07ab448f0651e82d5355930e6','c1bcf81aee7321598e9e86fb00dd4a86')

const bcrypt = require("bcrypt")


const cookieParser = require('cookie-parser')
const { find } = require('../Schema/Rent_form')
app.use(cookieParser())





// car form filling from owner /car url

router.post("/car",(req,res)=>{
    console.log(req.body)
    console.log("Car details")
    const {owner_name,vehicle_name,vehicle_no, start_time,end_time,rent,address,gmail}=req.body;
    if(!owner_name||!vehicle_name||!start_time||!vehicle_no||!end_time||!rent||!address||!gmail){
        res.status(422).json({err:"fill the data first"})
    }
    else{ 
        const car=new Car({owner_name,vehicle_name,vehicle_no, start_time,end_time,rent,address,gmail})
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

router.post("/signup",uplode.single('image'),(req,res)=>{
    console.log(req.body)
    console.log("signup  page")

    const { name,address,age,gender,occupation,phone,gmail,adhar,password,cpassword}=req.body;
    

    if(!name || !address ||!age||!occupation ||!phone||!gmail||!adhar||!password||!cpassword){
        return res.status(422).json({error:"fill the data first"})}
    
    Sign.findOne({gmail:gmail}).then((user)=>{
        if(user){
            return res.status(423).json({ error: "User already exist" })
        }
        if(password!=cpassword){
            return res.status(425).json({error:"check the password"})
        }else{
            const sign= new Sign({name,address,age,gender,occupation,phone,gmail,adhar,password,cpassword})
            if(req.image){
                   sign.image=req.file.path    
            }

            sign.save().then(()=>{
                res.status(201).json({ messsage: "saved successfully" })
            })
        }
    }).catch((err)=>{
        res.status(500).json({ message: "not saved" })  
    })

    
  
    }
)



router.post("/login",async(req,res)=>{
    try {
        const {gmail,password}=req.body
        console.log(req.body)


        if(!gmail || !password){
            return res.status(422).json({ error: "Fill the data first" })

        }
        else{
            const user= await Sign.findOne({gmail:gmail})
            console.log(user)
            if(user){



               // compering the hashed  message using bcrypt
               const passMatch=await bcrypt.compare(password,user.password)


                // token generator for authentication of user (generate token function callling)
                let token =await user.generateToken()
                console.log(token)
                res.cookie("jwt_token",token,{
                    expires: new Date(Date.now() + 254890000), httpOnly: true   // just see this meaning 
                })
                

                if(passMatch){
                    res.json({message:"login successfully"})
                }else{
                    res.status(400).json({err:"invalid cradentials"})
                }
            }else{
                    res.status(401).json({ error: "Invalid cradentials" })
        
                 }
        }
    }catch(err){
        console.log(err)
    }
})


router.get("/bike",async(req,res)=>{
    const bike= await Car.find({ vehicle_name:"Bike"})
        console.log(bike)
        res.json(bike)
})


router.get("/bicycle",async(req,res)=>{
    const bike= await Car.find({ vehicle_name:"Bicycle"})
        console.log(bike)
        res.json(bike)
})



router.get("/carshow",async(req,res)=>{
    const bike= await Car.find({ vehicle_name:"Car"})
       
        res.json(bike)
})



router.get('/home',authenticate,(req,res)=>{
    res.send(req.rootUser)
})

router.post("/cardel",async(req,res)=>{
   const {id} =req.body
    console.log(req.body)
    console.log(id)
   Car.findByIdAndRemove(id, (err)=>{
        if(!err){
            console.log("deleted")
            
        }else{
            console.log(err)
        }
    }
    )
   
})

router.post("/bikedel",async(req,res)=>{
    const {id} =req.body
     console.log(req.body)
     console.log(id)
    Car.findByIdAndRemove(id, (err)=>{
         if(!err){
             console.log("deleted")
             
         }else{
             console.log(err)
         }
     }
     )
    
 })
 router.post("/bicdel",async(req,res)=>{
    const {id} =req.body
     console.log(req.body)
     console.log(id)
    Car.findByIdAndRemove(id, (err)=>{
         if(!err){
             console.log("deleted")
             
         }else{
             console.log(err)
         }
     }
     )
    
 })
 

 router.post("/message",async(req,res)=>{
       const {id,gmail}=req.body
       console.log(req.body)
       const renter = await Sign.findOne({gmail:gmail})
       const owner = await Sign.findOne({gmail:id})
       console.log(renter)
       console.log(owner)
      
       
       
    client.messages
    .create({
       body:  `1 you have booked the vehicle  please check the owner name :${owner.name} ,phone number :${owner.phone} ,pickup point :${owner.address}`,
       from: '+19124913337',
       to:  `+91${renter.phone}`
     }
    )
    .then(message => console.log(message.sid));

client.messages
    .create(
     {
        body:  `2 your vehicle has been booked by  name :${renter.name} phone :${renter.phone} occupation :${owner.occupation}`,
        from: '+19124913337',
        to:  `+91${owner.phone}`
      })
    .then(message => console.log(message.sid));


    
    res.send("message sent")
 })


module.exports = router
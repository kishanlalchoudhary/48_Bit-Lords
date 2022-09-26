const express=require("express")
const app=express()
require('./Database/Conn')
app.use(express.json())
const cookieParser =require('cookie-parser')

app.use(cookieParser())
app.use(express.json())
app.use(require("./Server/auth"))
app.use('/Uplode',express.static('Uplode'))
app.get("/",(req,res)=>{res.send("this is first srever page")})


app.listen(5001,()=>{console.log("server is running at port number 5000")})


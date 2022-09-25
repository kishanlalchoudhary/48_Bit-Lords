const mongoose=require('mongoose')





const signupSchema= new mongoose.Schema({
   name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    occupation:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    gmail:{
        type:String,
        require:true
    },
    adhar:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    carform:[{
        type:Array
    }],
    book_car:[
        {type:Array}
    ]


})


const Sign=mongoose.model("SIGN",signupSchema)


module.exports=Sign;
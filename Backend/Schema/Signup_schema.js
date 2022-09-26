const mongoose=require('mongoose')

const jwt=require("jsonwebtoken")// for  authentication and  storing the token generated after login

const bcrypt=require("bcrypt")  // to hash password


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
    ],
    tokens:[
       { token:{
            type:String,
            require:true}
        }
    ]
    ,
    image:{
        type:String
    }


})



signupSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,13)
        this.cpassword=await bcrypt.hash(this.cpassword,13)
        next()
    }
})



signupSchema.methods.generateToken= async function(){
    try{
        let token =jwt.sign(_id=this.id.toString(),"adityamahajanfromreaaaaa"
        )
        this.tokens= this.tokens.concat({token:token})
        await this.save()

        return token;
    }
    catch(err){
        console.log(err)
    }
}







const Sign=mongoose.model("SIGN",signupSchema)


module.exports=Sign;
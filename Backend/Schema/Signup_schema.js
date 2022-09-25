const mongoose=require('mongoose')


const lenderSchema = new mongoose.Schema({
    owner_name: {
      type: String,
      required: true,
    },
    vehicle_name: {
      type: String,
      required: true,
    },
    vehicle_no: {
      type: String,
      required: true,
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  });





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
     carform:[lenderSchema],


})

const Car=mongoose.model("CARFORM",lenderSchema )


module.exports=Car; 

const Sign=mongoose.model("SIGN",signupSchema)


module.exports=Sign;
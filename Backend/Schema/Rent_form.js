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
    gmail:{
      type:String,
      required:true
    }
  });

  const Car=mongoose.model("CARFORM",lenderSchema )


module.exports=Car; 
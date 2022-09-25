const mongoose=require('mongoose')

const db="mongodb://localhost:27017/bitlords"
mongoose.connect(db).then(()=>{
    console.log("connection hes been done successfully with database info")
}).catch((err)=>{
console.log("failde to connect")
})

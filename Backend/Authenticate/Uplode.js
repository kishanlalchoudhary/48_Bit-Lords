const path=require('path')
const multer= require('multer')

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'Uplode/')

    },
    filename:function(req,file,cb){
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ ext)
    }
})

const uplode=multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype=="image/png",
            file.mimetype=="image/jpg"
        ){
            callback(null,true)
        }else{
            console.log("only jpg or png")
            callback(null,false)
        }

  }
})



module.exports=uplode
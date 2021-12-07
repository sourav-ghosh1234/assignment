const multer=require('multer')
var path=require("path");
const uploadPath=path.resolve(__dirname,"../uploads")

var maxSize=2097152
 const storage = multer.diskStorage({
    destination:uploadPath,
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    },
})
var upload =multer({storage:storage,
    limits: { fileSize: maxSize }})
module.exports=upload;
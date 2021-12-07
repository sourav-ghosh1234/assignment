const  mongoose=require('mongoose');



const userSchema=mongoose.Schema({
   id:String,
   name:String,
   phone:String,
   email:String,
   password:String,
   profileImage:String

})

const User=mongoose.model('User',userSchema)



module.exports=User;
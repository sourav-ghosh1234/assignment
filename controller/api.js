
var jwt=require('jsonwebtoken')
var bcyrpt=require('bcryptjs')
var User=require('./../models/User')
exports.createUser=async(req,res)=>{
    try{
   var checkuser=await User.findOne({email:req.body.email})
   var maxSize=214957
   if(!checkuser){
       if(req.file.size>maxSize){
         return res.status(200).send({
             status:false,
             message:"filesize exceeds 2 mb"
         })

       }
    //  console.log(req.file)
    req.body.password=bcyrpt.hashSync(req.body.password.toString(),10)
    req.body.profileImage=req.file.filename;

    var user=new User(req.body)
    await user.save();
    return res.status(200).send({
        status:true,
        message:"User created successfuly"
    })

   }else{
    return res.status(200).send({
        status:false,
        message:"User Email already created"
    })
   }


    }catch(err){
        return res.status(500).send({
            status:false,
            message:err.message
        })
    }
}

exports.updateUser=async(req,res)=>{
    try{
        if(req.body.password){
            req.body.password=bcyrpt.hashSync(req.body.password.toString(),10)
        }
        var c=await User.find();
        // console.log(c)
        var checkuser=await User.findOneAndUpdate({email:req.body.email.toString()},req.body,{new:true})
        // console.log(checkuser)
        if(checkuser){
            res.status(200).send({
                status:true,
                message:"updated successfully"
            })
        }else{
            res.status(200).send({
                status:false,
                message:"Email not found"
            })

        }

    }catch(err){
        return res.status(500).send({
            status:false,
            message:err.message
        })
    }
}
const express=require('express');
const { createUser,updateUser } =require('../controller/api');
const router=express.Router();

const upload=require('./../middlewares/upload')

router.post('/createuser',upload.single("file"),createUser)
router.post('/updateuser',updateUser)

module.exports=router
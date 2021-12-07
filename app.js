const express=require('express');
const bodyParser =require('body-parser')
const mongoose=require('mongoose');



const app=express();





app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use('/user',require('./routes/api'))

//mongo coonnection
const CONNECTION_URL="mongodb+srv://sourav:1234@cluster0.bgr9p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT=process.env.PORT||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Mongodb connected")
})
.catch(()=>console.log(error.message))

// mongoose.set('useFindAndModify',false)
app.listen(PORT,()=>{console.log(`server running on port: ${PORT}`)})
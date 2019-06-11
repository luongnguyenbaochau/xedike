const express=require("express");
const mongoose= require("mongoose");
const app= express();
/* my pack*/
/*connect db*/
mongoose.connect("mongodb://localhost:27017/xedike",{useNewUrlParser:true})
.then(()=>console.log("connect db"))
.catch(err=>console.log(err))








const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is running port ${port}`);
})
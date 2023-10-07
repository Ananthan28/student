const express=require('express');
const mongoose=require('mongoose');

const app= express();
const port=4000;
const bodyParser = require('body-parser')
const StudentRouter=require('./router/router')
app.use(bodyParser.json())

app.use('/students',StudentRouter)
app.listen(port,()=>{
    console.log(`app listening to port ${port}`)
})
mongoose.connect(`mongodb+srv://Ananthan:ananthan2160@cluster0.r4akhnz.mongodb.net/?retryWrites=true&w=majority`,{
})
.then (()=> console.log("Mongoose connected"))
.catch((err)=> console.log("err"))
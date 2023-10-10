const express=require('express');
const dotenv = require('dotenv');

const app= express();
const connect=require('./mongodb/config');
const bodyParser = require('body-parser')
const StudentRouter=require('./router/router')
app.use(bodyParser.json())

app.use('/students',StudentRouter)
dotenv.config();
const PORT=process.env.PORT;
connect();
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
// mongoose.connect(`mongodb+srv://Ananthan:ananthan2160@cluster0.r4akhnz.mongodb.net/?retryWrites=true&w=majority`,{
// })
// .then (()=> console.log("Mongoose connected"))
// .catch((err)=> console.log("err"))
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const serverRoutes = require('./routes/ServerRoutes');

//express app
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
});

//routes
app.get('/api',(req,res)=>{
    res.json({
        msg : " Hello world"
    })
});

app.use('/api/servers', serverRoutes);

//db connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    //listen to request
    app.listen(process.env.PORT, ()=>{
        console.log("connected to db and listening on port : "+ process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error)
});
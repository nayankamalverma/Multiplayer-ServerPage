require('dotenv').config()
const express = require('express');
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
})

app.use('/api/servers', serverRoutes)

//listen to request
app.listen(process.env.PORT, ()=>{
    console.log("server runing at port : "+ process.env.PORT);
});
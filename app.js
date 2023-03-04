const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path=require("path")
const Routes= require('./routes/Routes');
dotenv.config();
mongoose.connect(`${process.env.MONGO_URL}`,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
    console.log("db connected");
}) 
app.use(cors());
app.use(bodyParser.json({ extended:true })); 
app.use(bodyParser.urlencoded({ extended:true }));
console.log(process.env.PORT); 
const port = process.env.PORT || 8000;
// app.use("/",Routes);
app.use('/',Routes)
if(process.env.NODE_ENV === 'production'){      // set static folder 
    //returning frontend for any route other than api 
    app.get('/',(req,res)=>{     
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'),function(err) {
            if(err){
                res.status(500).send(err);
            }
        });    
    });
}
app.listen(port,()=>{
    console.log("server started hello");
}) 
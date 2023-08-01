const express = require('express');
const app = express();
let {people} = require('./data');
app.get('/api/people',(req,res) => {
    res.status(200).json({success:true,data:people});
})
app.listen(4000,(req,res)=>{
    console.log("server is running on port 4000");
})
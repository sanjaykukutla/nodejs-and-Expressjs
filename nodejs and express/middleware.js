const express = require('express');
const app = express();
const logger = require('./logger')
const morgan = require('morgan')
const authorize = require('./authorize')
// app.use([authorize,logger]);
app.use(morgan('tiny'));
app.get('/',(req,res) => {
    res.status(200).send({message:"hi"});
})

app.get('/about',(req,res) => {
    res.send('about');
})
app.get('/api/products',(req,res) => {
    res.send('products');
})
app.get('/api/items',(req,res) => {
    res.send('items');
})
app.listen(4000,(req,res)=>{
    console.log("server is running on port 4000");
})
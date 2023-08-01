const express = require('express');

const app = express();
const {products} = require('./data')

const path  = require('path');


app.get('/', (req, res) => {
    res.status(200).send('home page');
})

app.get('/about', (req, res) => {
    res.status(200).send('about page');
})

app.all('*',(req, res) => {
    res.status(404).send('resource not found');
})

// app.get('/',(req,res)=>{
//     res.status(200).json(products);
// })
const port = 4500;

app.listen(port,()=>{console.log(`server is running on ${port} number`);})
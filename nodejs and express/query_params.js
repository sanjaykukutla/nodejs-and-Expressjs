const express = require('express');
const app = express();
const {products} = require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products/3">Products</a>');
})
app.get('/api/products/:productID',(req,res)=>{
    // const newProducts = products.map((product)=>{
    //     const {id,name,image} = product;
    //     return {id,name,image};
    // })
    const {productID} = req.params;
    const newProducts = products.find((product)=> product.id === Number(productID));
    if(!newProducts){
        return res.status(404).send("product doesn't exist")
    }
    res.json(newProducts);
})
app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query);
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = products.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(sortedProducts.length<1){
        return res.status(200).send("no products available");
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    res.status(200).json(sortedProducts);
    //res.send("hello world");
})
app.listen(4000,()=>{
    console.log("server is running on port 4000");
})
  
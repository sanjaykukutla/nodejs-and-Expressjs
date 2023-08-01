const http = require('http');


const server = http.createServer();

server.on('request',(req,res)=>{
    // console.log(res);
    res.end('hi there');
})

server.listen(4500);
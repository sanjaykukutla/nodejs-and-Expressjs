const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    // const data = fs.readFileSync('./content/big.txt','utf8');
    // res.end(data)
    const stream = fs.createReadStream('./content/big.txt','utf8');
    stream.on('open',()=>{
        stream.pipe(res);
    })
    stream.on('error',(err)=>{
        res.end(err);
    })
})

server.listen(4500);
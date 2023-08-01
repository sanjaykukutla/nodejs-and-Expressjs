const http = require("http");
const {readFileSync} = require("fs");

const homePage = readFileSync('./index1.html')

const server = http.createServer((req, res) => {
  // console.log("user hit the server");
  // console.log(req.method);
  // console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>Home page</h1>");
    res.write(homePage);
    // res.end("hello world");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    // res.end("hello world");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    // res.end("hello world");
    res.end();
  }
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write("<h1>User hit the server</h1>");
//   // res.end("hello world");
//   res.end();
});

server.listen(4500);

const http = require("http")

const PORT = 3000
var myCounter = 0;
const myServer = http.createServer((req, res) =>{
    myCounter ++;
    console.log(req);
    console.log(res);
    res.end("Hello" + myCounter );
})

myServer.listen(PORT, ()=> console.log("Server is running"));

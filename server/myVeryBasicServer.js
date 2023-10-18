const http = require("http");

const PORT = 3000
var myCounter = 0;
const myServer = http.createServer((req, res) =>{
    myCounter ++;
    res.end("Hellos" + myCounter );
})

myServer.listen(PORT, ()=> console.log("Server is running"));

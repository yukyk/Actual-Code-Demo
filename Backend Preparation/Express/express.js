const http = require('http');
const express = require('express');
const ex = express();
const server =http.createServer(ex);
server.listen(3000,()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");
})
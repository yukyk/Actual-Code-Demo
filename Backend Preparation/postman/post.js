let express = require('express');
let post = express();
let port = 3000;

post.use(express.json());


let addUser = ((res,req,next)=>{
    req.user = 'Guest';
    next();
});

post.get('/welcome',addUser,(res,req)=>{
    res.send(`<h1>Welcome ${req.user}!</h1>`);

});


post.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


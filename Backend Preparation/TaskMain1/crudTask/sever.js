const express = require('express');
const sever = express();
const port = 3000;

const studentRoutes = require('./student');
const courseRoutes = require('./course');


sever.use(express.json());

sever.get('/',(req,res)=>{
    res.send('Welcome to the Student-Course Management API');
});

sever.use('/student', studentRoutes)
sever.use('/course', courseRoutes)

sever.use((req, res)=>{
    res.status(404).send({message: 'Route Not Found'});
});

sever.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});


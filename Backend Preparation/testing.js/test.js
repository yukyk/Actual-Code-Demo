const express = require('express');
const test = express();
const port = 3000;


test.use(express.json());


test.get('/orders', (req, res)=>{
    res.send(`<h1>Here is the list of all Orders</h1>`);
});

test.post('/orders', (req, res) => {
  console.log('POST /orders body:', req.body);
  res.status(201).send('<h1>A new Order has been created!</h1>');
});

test.get('/users/', (req, res)=>{
    res.send(`<h1>Here is the list of all users!</h1>`);
});

test.post('/users', (req, res) => {
  console.log('POST /users body:', req.body);
  res.status(201).send('<h1>A new user has been added!</h1>');
});

test.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});

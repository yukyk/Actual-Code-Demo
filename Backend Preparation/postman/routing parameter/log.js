const express = require('express');
const log = express();
const port = 3000;


log.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); 
});


log.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

log.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

log.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

log.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});


log.listen(port, () => {
  console.log('Server is running on port 3000');
});
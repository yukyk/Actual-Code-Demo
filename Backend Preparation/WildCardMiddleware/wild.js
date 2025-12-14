const express = require('express');
const wild = express();
const port = 4000;

wild.use(express.json());

wild.get('/products', (req,res)=>{
    res.send(`<h1>Here is the list of all the Products</h1>`);
});

wild.post('/products', (req,res)=>{
    res.send(`<h1>A new Product has been added!</h1>`)
});

wild.get('/categories',(req,res)=>{
    res.send(`<h1>Here is the list of all Categories</h1>`)
})

wild.post('/categories',(req,res)=>{
    console.log('POST /categories body:', req.body);
    res.status(201).send(`<h1>A new Category has been added!</h1>`);
});


wild.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

wild.listen(port, ()=>{
    console.log(`Server is running on port ${port}`); 
});
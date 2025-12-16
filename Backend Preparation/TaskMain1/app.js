const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const bookRoutes = require('./books');


app.use('/books', bookRoutes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
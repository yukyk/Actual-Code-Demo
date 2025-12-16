const express = require('express');
const main = express();
const port = 4000;


const productRoutes = require('./order');
const categoryRoutes = require('./cat');


main.use(express.json());


main.use('/order', productRoutes);
main.use('/categories', categoryRoutes);


main.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
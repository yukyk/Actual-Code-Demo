const express = require('express');
const sever = express();
const port = 4000;

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

sever.use(express.json());

sever.use('/users', userRoutes);
sever.use('/products', productRoutes);
sever.use('/cart', cartRoutes);

sever.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

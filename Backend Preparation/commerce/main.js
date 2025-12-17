const express = require('express');
const app = express();
const port = 4000;


app.use(express.json());

const productRoutes = require('./controller/routes/productRoutes');
const orderRoutes = require('./controller/routes/orderRoutes');
const cartRoutes = require('./controller/routes/cartRoutes');


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/cart', cartRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
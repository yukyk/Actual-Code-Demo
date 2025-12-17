const express = require('express');
const app = express();
const port = 4000;

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require('./controller/routes/userRoutes');
const productRoutes = require('./controller/routes/productRoutes');
const cartRoutes = require('./controller/routes/cartRoutes');

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
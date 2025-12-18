const express = require("express");
const app = express();

const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

// Routes
app.use("/users", require("./Routes/userRoutes"));
app.use("/products", require("./Routes/productRoutes"));
app.use("/cart", require("./Routes/cartRoutes"));

// Centralized Error Handler (ALWAYS LAST)
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/", productRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

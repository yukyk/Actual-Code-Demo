const express = require("express");
const app = express();
const productRoutes = require("./Routes/productRoutes");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRoutes);
app.use("/public", express.static("public"));


app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

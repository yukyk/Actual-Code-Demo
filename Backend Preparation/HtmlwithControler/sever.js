const express = require("express");
const productRoutes = require("./Routes/productRoutes");

const app = express();
const PORT = 4000;

app.use("/api", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// GET endpoint
app.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname, "VIEW", "product.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
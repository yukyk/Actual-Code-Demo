const path = require("path");

const getProductsPage = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "product.html"));
};

module.exports = {
    getProductsPage
};

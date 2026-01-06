const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "View", "index.html"));
});

app.post("/login", (req, res) => {
    console.log("Data received from frontend:");
    console.log(req.body); 

    res.json({
        message: "Data received successfully",
        data: req.body
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

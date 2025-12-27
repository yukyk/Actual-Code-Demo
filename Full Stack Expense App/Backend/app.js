const express = require("express");
const path = require("path");
const sequelize = require("./Util/util");

const expenseRoutes = require("./Routes/expenseRoute");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "Frontend")));

app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Frontend", "index.html"));
});

sequelize.sync({ force: true })
  .then(() => {
    console.log("DB synced (tables dropped & recreated)");
    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  })
  .catch(err => {
    console.error("Error syncing DB:", err);
  });

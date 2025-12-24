const express = require('express');
const db = require('./Utils/util');
const studentRoutes = require('./Routes/studentRoutes');
const app = express();


require('./models');


app.use(express.json());

app.use('/', studentRoutes);
db.sync({force:true}).then(() => {
    app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

}).catch((err) => {
    console.log(err);
});


app.get('/', (req, res) => {
    res.send("Hello world");
});

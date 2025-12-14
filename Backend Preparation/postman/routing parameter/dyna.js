const express= require('express');
const dyna= express();
const port= 3000;
dyna.use(express.json());

dyna.get('/welcome/:username',(req,res)=>{
    const username = req.params.username;
    const role = req.query.role;
    res.send(`<h1>Welcome ${username}!</h1><p>Your role is: ${role}</p>`);
});

dyna.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

dyna.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
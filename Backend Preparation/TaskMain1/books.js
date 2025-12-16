const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    console.log('GET /books request received');
    res.send(`Here is the list of all Books.`);
})

router.post('/', (req, res) =>{
    console.log('Book data received:', req.body);
    res.send(`Book has been added!`);
});

module.exports = router;
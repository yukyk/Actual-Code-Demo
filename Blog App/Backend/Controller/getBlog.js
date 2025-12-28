const Blog = require('../Models/blogModel');
const Comment = require('../Models/commentModel');

const getBlog = async (req, res) => {
    try{
        const blogs = await Blog.findAll({ include: Comment });
    res.json(blogs);
    } catch(err){
        res.status(500).send("Error retrieving blogs from the database.");
    }
   
};


module.exports = {getBlog};
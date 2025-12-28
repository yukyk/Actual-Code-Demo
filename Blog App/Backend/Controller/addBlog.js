const Blog = require('../Models/blogModel');

const addBlog = async (req, res) => {
    try {
        const { title, name, description } = req.body;

        const blog = await Blog.create({title, name, description} );
        res.status(201).json(blog);
    } catch (err) {
        console.error("ADD Blog ERROR:", err); // 👈 THIS WILL SHOW REAL ERROR
        res.status(500).json({ error: err.message });
    }
};

module.exports = {addBlog};

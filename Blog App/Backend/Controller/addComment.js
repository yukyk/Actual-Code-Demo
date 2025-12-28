const Comment = require('../Models/commentModel');

const addComment = async (req, res) => {
    const {content} = req.body;
    const comment = await Comment.create({
        content,
        blogId: req.params.blogId
    });
    res.status(201).json({message: "Comment added successfully", comment});

};

module.exports = {addComment};
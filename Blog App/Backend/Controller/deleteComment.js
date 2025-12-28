const Comment = require('../Models/commentModel');

const deleteComment = async (req, res) =>{
    await Comment.destroy({where:{id:req.params.id}});
    res.json({message: `Comment with id ${req.params.id} deleted successfully.`});
};

module.exports = {deleteComment};


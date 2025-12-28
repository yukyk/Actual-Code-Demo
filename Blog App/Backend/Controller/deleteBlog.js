const blogModel = require('../Models/blogModel');


const deleteBlog = async (req, res) =>{
    try{
        const {id} = req.params;
        const affectedRows = await blogModel.destroy({
            where:{id}
        });
        if(affectedRows === 0){
            res.status(404).send(`Blog with id ${id} not found.`);
            return;
        }
        res.status(200).send(`Blog with id ${id} successfully deleted.`);

    } catch(err){
        res.status(500).send("Error deleting entry from the database.");
    }
};

module.exports = {deleteBlog};
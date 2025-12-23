const userModel = require('../Models/userModel');


const deleteUser = async (req, res) =>{
    try{
        const {id} = req.params;
        const affectedRows = await userModel.destroy({
            where:{id}
        });
        if(affectedRows === 0){
            res.status(404).send(`User with id ${id} not found.`);
            return;
        }
        res.status(200).send(`User with id ${id} successfully deleted.`);

    } catch(err){
        res.status(500).send("Error deleting entry from the database.");
    }
};

module.exports = deleteUser;
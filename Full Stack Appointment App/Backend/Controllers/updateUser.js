const userModel = require('../Models/userModel');

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;

        const [affectedRows] = await userModel.update(
            { name, email },
            { where: { id } }
        );

        if (affectedRows === 0) {
            res.status(404).send(`User with id ${id} not found.`);
            return;
        }

        res.status(200).send(`User with id ${id} successfully updated.`);
    } catch (err) {
        res.status(500).send("Error updating entry in the database.");
    }
};

module.exports = updateUser;

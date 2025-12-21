 const db = require('../utils/util');

const addEntries = (req,res) =>{
    const { name, email } = req.body;
    const insertQuery = 'INSERT INTO students (name, email) VALUES (?, ?)'; 

    db.execute(insertQuery, [name, email], (err, results) => {
        if (err) {
            console.log(err.message);
            res.status(500).send("Error adding entry to the database.");
            db.end();
            return;
        }
        console.log("Entry added successfully.");
        res.status(200).send(`Student with name ${name} successfully added.`) 
    })

}

const updateEntries = (req,res) => {
    const { id } = req.params;
    const { name,email} = req.body;
    const updateQuery = 'UPDATE students SET name = ?, email = ? WHERE id = ?';

    db.execute(updateQuery, [name, email, id], (err,results) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error updating entry in the database.");
            db.end();
            return;
        }

        if(results.affectedRows === 0){
            res.status(404).send(`Student with id ${id} not found.`);
            return;
        }
        res.status(200).send(`Student with id ${id} successfully updated.`);    


    });
}


 const deleteEntries = (req,res) => {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM students WHERE id = ?';

    db.execute(deleteQuery, [id], (err,results) => {
        if(err){
            console.log(err.message);
            res.status(500).send("Error deleting entry in the database.");
            db.end();
            return;
        }

        if(results.affectedRows === 0){
            res.status(404).send(`Student with id ${id} not found.`);
            return;
        }
        res.status(200).send(`Student with id ${id} successfully deleted.`);    
    });
}

module.exports = {addEntries, updateEntries,deleteEntries};
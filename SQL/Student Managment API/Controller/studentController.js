const db = require('../Utils/util');

const addStudent = (req,res) =>{
    const { name, email, age } = req.body;
    const insertQuery = 'INSERT INTO student (name, email,age) VALUES (?, ?,?)'; 
        console.log('[INSERT] Student:', { name, email, age });


    db.execute(insertQuery, [name, email,age], (err, results) => {
        if (err) {
            console.log(err.message);
            res.status(500).send("Error adding entry to the database.");
            db.end();
            return;
        }
        console.log("Entry added successfully.");
        res.status(200).send(`Student with name ${name} and successfully added.`) 
    })

}

const getAllStudents = (req, res) => {
    const query = 'SELECT * FROM student';

    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

const getStudentById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM student WHERE id = ?';

    db.execute(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(results[0]);
    });
};

const updateStudent = (req,res) => {
    const { id } = req.params;
    const { name,email,age} = req.body;
    const updateQuery = 'UPDATE student SET name = ?, email = ?, age = ? WHERE id = ?';

    db.execute(updateQuery, [name, email, age, id], (err,results) => {
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


 const deleteStudent = (req,res) => {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM student WHERE id = ?';

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

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
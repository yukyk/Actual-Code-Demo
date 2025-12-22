const db = require('../Utils/util');
const studentModel = require('../models/studentTables');




const addStudent = async (req, res) =>{
    try{
        const {name, email} = req.body;
        const student = await studentModel.create({
            name:name, 
            email:email
        });
        res.status(201).send(`Student with name ${name} successfully added.`)
    } catch(err){
        res.status(500).send("Error adding entry to the database.");  
    }
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

const updateStudent = async(req,res) => {
    try{
    const { id } = req.params;
    const { name,email,age} = req.body;
    const student = await studentModel.findByPk(id);
    if(!student){
        res.status(404).send(`Student with id ${id} not found.`);
    }
    student.name = name; 
    student.email = email;
    await student.save();
    res.status(200).send(`Student with id ${id} successfully updated.`);

    }catch(err){
        res.status(500).send("Error updating entry in the database.");

    }
    
}


 const deleteStudent = async (req,res) => {
    try{
        const { id } = req.params;
        const student = await studentModel.destroy({
            where: {
                id:id 
            }
        })
        if(!student){
            res.status(404).send(`Student with id ${id} not found.`);
        }
        res.status(200).send(`Student with id ${id} successfully deleted.`);

    } catch(err){
        console.log(err.message);
        res.send("Error deleting entry in the database.");

    }




}

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
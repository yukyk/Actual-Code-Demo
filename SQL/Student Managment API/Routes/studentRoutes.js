const express = require('express');
const router = express.Router();

const {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../Controller/studentController');

router.post('/students/add', addStudent);
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
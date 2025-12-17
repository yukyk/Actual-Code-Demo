const express = require('express');
const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

router.get('/', (req, res) => {
  const [{ name: student1 }, { name: student2 }] = students;
  res.send(`Students: ${student1}`);
});


router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.send('Student not found');
  }

  res.send(`Student: ${student.name}`);
});

module.exports = router;

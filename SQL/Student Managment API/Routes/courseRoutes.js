const express = require('express');
const { addCourse } = require('../Controller/courseController');
const { addStudentstoCourses } = require('../Controller/courseController');

const router = express.Router();

router.post('/addcourse', addCourse);
router.get('/addstudentcourses', addStudentstoCourses);

module.exports = router;

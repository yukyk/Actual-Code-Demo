const express = require('express');
const router = express.Router();

const expenseController = require('../Controller/expenseController');


router.post('/', expenseController.addExpense);
router.get('/', expenseController.getExpenses);
router.delete('/:id', expenseController.deleteExpense);
router.put('/:id', expenseController.updateExpense);


module.exports = router;

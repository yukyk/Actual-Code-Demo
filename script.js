// Select elements
const form = document.getElementById('expense-form');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');

// Load expenses from localStorage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Function to render all expenses
function renderExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${expense.name}</td>
      <td>$${expense.amount}</td>
      <td>
        <button class="btn btn-sm btn-edit me-2" onclick="editExpense(${index})">Edit</button>
        <button class="btn btn-sm btn-delete" onclick="deleteExpense(${index})">Delete</button>
      </td>
    `;
    expenseList.appendChild(row);
  });
}

// Function to save to localStorage
function saveToLocalStorage() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Add new expense
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = expenseName.value.trim();
  const amount = parseFloat(expenseAmount.value);

  if (name && amount > 0) {
    expenses.push({ name, amount });
    saveToLocalStorage();
    renderExpenses();
    form.reset();
  }
});

// Delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  saveToLocalStorage();
  renderExpenses();
}

// Edit expense
function editExpense(index) {
  const expense = expenses[index];
  const newName = prompt('Edit Expense Name:', expense.name);
  const newAmount = prompt('Edit Amount:', expense.amount);

  if (newName !== null && newAmount !== null && newName.trim() && !isNaN(newAmount)) {
    expenses[index] = { name: newName.trim(), amount: parseFloat(newAmount) };
    saveToLocalStorage();
    renderExpenses();
  }
}

// Initial render
renderExpenses();

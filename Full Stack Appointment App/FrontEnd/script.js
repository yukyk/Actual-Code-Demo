const API_URL = "http://localhost:3000/expenses";

const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

// Track currently editing expense
let editExpenseId = null;

// Add or update expense
expenseForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value.trim();
    const category = document.getElementById("category").value.trim();

    if (!amount || isNaN(amount)) return alert("Enter a valid amount");
    if (!description) return alert("Description cannot be empty");
    if (!category) return alert("Category cannot be empty");

    try {
        if (editExpenseId) {
            // Update existing expense
            await axios.put(`${API_URL}/${editExpenseId}`, { amount, description, category });
            editExpenseId = null;
            expenseForm.querySelector("button").textContent = "Add Expense";
        } else {
            // Add new expense
            await axios.post(API_URL, { amount, description, category });
        }

        expenseForm.reset();
        fetchExpenses();
    } catch (err) {
        alert(err.response?.data?.error || "Error adding/updating expense");
    }
});

// Fetch all expenses
const fetchExpenses = async () => {
    try {
        const response = await axios.get(API_URL);
        const expenses = response.data;

        expenseList.innerHTML = "";

        expenses.forEach(expense => {
            const li = document.createElement("li");
            li.innerHTML = `
                $${expense.amount.toFixed(2)} - ${expense.description} (${expense.category})
                <button onclick="editExpense(${expense.id}, '${expense.amount}', '${expense.description}', '${expense.category}')">Edit</button>
                <button onclick="deleteExpense(${expense.id}, this)">Delete</button>
            `;
            expenseList.appendChild(li);
        });

    } catch (err) {
        console.log("Error fetching expenses");
    }
};

// Delete expense
const deleteExpense = async (id, btn) => {
    if (!confirm("Are you sure you want to delete this expense?")) return;

    try {
        await axios.delete(`${API_URL}/${id}`);
        // Remove the parent li element instantly
        btn.parentElement.remove();
    } catch (err) {
        alert(err.response?.data?.message || "Error deleting expense");
    }
};

// Edit expense
const editExpense = (id, amount, description, category) => {
    document.getElementById("amount").value = amount;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category;

    editExpenseId = id;
    expenseForm.querySelector("button").textContent = "Update Expense";
};

// Initial fetch
fetchExpenses();

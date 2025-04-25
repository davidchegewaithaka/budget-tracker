let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    // Create new expense object
    const expense = { category, amount, date };
    expenses.push(expense);

    // Update total amount
    totalAmount += amount;
    totalAmountCell.textContent = '$' + totalAmount.toFixed(2);

    // Create a new row for the expense
    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        // Remove expense from array
        expenses.splice(expenses.indexOf(expense), 1);

        // Update total amount
        totalAmount -= expense.amount;
        totalAmountCell.textContent = '$' + totalAmount.toFixed(2);

        // Remove the row from the table
        expensesTableBody.removeChild(newRow);
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent = '$' + expense.amount.toFixed(2);
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
});

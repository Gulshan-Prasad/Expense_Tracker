document.getElementById('expenseForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    if (amount <= 0 || isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }
  
    const tableBody = document.querySelector('#expenseTable tbody');
    const newRow = document.createElement('tr');
  
    newRow.innerHTML = `
      <td>₹${amount}</td>
      <td>${category}</td>
      <td>${date}</td>
      <td>${description}</td>
      <td><button class="delete-btn" onclick="deleteExpense(this)">Delete</button></td>
    `;
  
    tableBody.appendChild(newRow);
  
    updateTotal(parseFloat(amount));
  
    document.getElementById('expenseForm').reset();
  });
  
  function deleteExpense(button) {
    const row = button.closest('tr');
    const amount = parseFloat(row.children[0].textContent.replace('₹', ''));
  
    row.remove();
  
    updateTotal(-amount);
  }
  
  function updateTotal(amount) {
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = parseFloat(totalAmountElement.textContent);
    totalAmount += amount;
    totalAmountElement.textContent = totalAmount.toFixed(2);
  }

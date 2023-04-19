const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform validation checks
    if (email === 'admin' && password === 'password') {
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = 'none';
        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = 'block';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});



// Deposit Button Event Handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
	// const depositAmount = document.getElementById('depositAmount').value;
	// const depositNumber = parseFloat(depositAmount);
	const depositNumber = getInputNumber('depositAmount');

	// const currentDeposit = document.getElementById('currentDeposit').innerText;
	// const currentDepositNumber = parseFloat(currentDeposit);
	// const totalDeposit = depositNumber + currentDepositNumber;
	// // console.log(totalDeposit);
	// document.getElementById('currentDeposit').innerText = totalDeposit;

	updateSpanText('currentDeposit', depositNumber);
	updateSpanText('currentBalance', depositNumber);

	document.getElementById('depositAmount').value = '';
});

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
	// const withdrawAmount = document.getElementById('withdrawAmount').value;
	// console.log(withdrawAmount);
	// const withdrawNumber = parseFloat(withdrawAmount);

	const withdrawNumber = getInputNumber('withdrawAmount');
	// console.log(withdrawNumber);

	updateSpanText('currentWithdraw', withdrawNumber);
	updateSpanText('currentBalance', -1 * withdrawNumber);

	document.getElementById('withdrawAmount').value = '';
});

function getInputNumber(id) {
	const withdrawAmount = document.getElementById(id).value;
	// console.log(withdrawAmount);
	const withdrawNumber = parseFloat(withdrawAmount);
	return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
	const currentBalance = document.getElementById(id).innerText;
	const currentBalanceNumber = parseFloat(currentBalance);
	const totalBalance = depositNumber + currentBalanceNumber;
	document.getElementById(id).innerText = totalBalance;
}

/// Transfer Button Event Handler
const transferBtn = document.getElementById('addTransfer');
transferBtn.addEventListener('click', function () {
    const transferAmount = getInputNumber('transferAmount');
    const transferAccount = document.getElementById('transferAccount').value;

    // Perform validation checks
    if (transferAmount <= 0) {
        alert('Invalid transfer amount. Please enter a positive number.');
        return;
    } else if (transferAccount === '') {
        alert('Invalid transfer account. Please enter an account number.');
        return;
    }

    updateSpanText('currentWithdraw', transferAmount);
    updateSpanText('currentBalance', -1 * transferAmount);

    // Display alert with transferred amount
    alert(`Successfully transferred Rs${transferAmount} to account number ${transferAccount}.`);

    // Clear the input fields
    document.getElementById('transferAmount').value = '';
    document.getElementById('transferAccount').value = '';
});
const updateButton = document.getElementById("update-info");

updateButton.addEventListener("click", function() {
  const name = prompt("Enter your name:");
  const address = prompt("Enter your address:");
  const phone = prompt("Enter your phone number:");

  if (name && address && phone && phone.match(/^\d{10}$/)) {
    const nameCell = document.getElementById("name-cell");
    const addressCell = document.getElementById("address-cell");
    const phoneCell = document.getElementById("phone-cell");
    
    nameCell.innerHTML = name;
    addressCell.innerHTML = address;
    phoneCell.innerHTML = phone;
  } else {
    alert("Please enter valid phone number.");
  }
});
const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function() {
  // clear the user's session and redirect them to the login page
  window.location.href = "http://127.0.0.1:5500/bank-app/index.html";
 
});


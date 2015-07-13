// key value pair

var accounts = {

  checking: {
    balance: 0,
    deposit: function(amount) {
      console.log('depositing money');

      accounts.checking.balance += amount;
    },

    withdraw: function(amount) {
      if (amount <= accounts.checking.balance) {
        accounts.checking.balance -= amount;
        return true;
      } else {
        // no enough dough, try hacking
        return false;
      }
    }
  }
}

//===========================================

function renderBalance() { // todo
  // redraw balance on the webpage
  console.log('update balance');

  var checkingBalanceDisplay = document.getElementById('checking-balance');

  checkingBalanceDisplay.innerHTML = accounts.checking.balance;
}

renderBalance();

// var checkingDepositButton = document.getElementById(''); // todo

// var performDeposit = function() {
//   var depositInput = document.getElementById(''); // todo
//   var depositAmount = parseFloat(depositInput.value, 10);
//   accounts.checking.deposit(depositAmount);
//   renderBalance();
// };

// checkingDepositButton.addEventListener('click', performDeposit);






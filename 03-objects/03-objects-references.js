// This object is stored in RAM
let myAccount = {
  name: 'Brian Lavery',
  expenses: 0,
  income: 0
}


let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account)
}

addExpense(myAccount, 2.50);
console.log(myAccount)


let addExpense2 = function (account, amount) {
  account = {}
  console.log(account)
}

addExpense2(myAccount, 2.50);

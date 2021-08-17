let myAccount = {
  name: 'Brian Lavery',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
}

// addIncome
let addIncome = function (account, amount) {
  account.income = account.income + amount;
}

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
}

// getAccountSummary
let getAccountSummary = function (account) {
  return `${account.name}'s account has expenses of $${account.expenses} and income of $${account.income}.`
}

addIncome(myAccount, 10);
addExpense(myAccount, 4);
addExpense(myAccount, 1.50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

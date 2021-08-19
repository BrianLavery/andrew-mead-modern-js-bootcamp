const account = {
  name: 'Andrew Mead',
  expenses: [],
  income: [],
  addExpense(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  addIncome(description, amount) {
    this.income.push({
      description, description,
      amount: amount
    });
  },
  getExpensesSummary() {
    let totalExpenses = 0;
    let summary = `Account for ${this.name}: `;
    this.expenses.forEach((expense) => {
      summary += `${expense.description}: $${expense.amount}, `;
      totalExpenses += expense.amount;
    });
    summary = summary.slice(0, -2);
    summary += `\nTotal expenses: $${totalExpenses}`;
    return summary;
  },
  getAccountSummary() {
    let totalExpenses = 0;
    this.expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });
    let totalIncome = 0;
    this.income.forEach((income_item) => {
      totalIncome += income_item.amount;
    });
    return `Account for ${this.name}: Balance = $${totalIncome - totalExpenses}. Income = $${totalIncome}. Expenses = $${totalExpenses}`
  }
}

// Challenges
// 1. Expense is an object -> description, amount
// 2. addExpense -> description, amount
// 3. Get Account summary
// 4. add income array to account
// 5. addIncome method -> description, amount
// 6. Tweak getAccountSummary. Balance, income, expenses


console.log(account.getAccountSummary());
account.addExpense('Rent', 950);
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary());
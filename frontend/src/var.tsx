const incomeOpt: string[] = ["Зарплата", "Подарки", "Инвестиции", "Кат4"];
const expensesOpt: string[] = ["Квартира", "Еда", "Кат3", "Кат4"];
const incomeSum: number = 12500;
const expensesSum: number = 7250;
const subtract = (income: number, expenses: number): number =>
  income - expenses;

export { incomeOpt, expensesOpt, expensesSum, incomeSum, subtract };

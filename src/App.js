import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

import { expenses } from './components/Expenses/ExpensesList'

function App() {

  const addExpenseHandler = expense => {
    console.log('in App.js');
    console.log(expense);
  };

  return (
    <div>
      <div className="App">
        <div className="expensesList">
          <NewExpense onAddExpense={addExpenseHandler} />
          <ExpensesFilter />
          {expenses.map(expense => {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            )
          }
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

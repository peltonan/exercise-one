import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'

import { expenses } from './components/Expenses/ExpensesList'

function App() {

  const addExpenseHandler = expense => {
    console.log('in Expenses.js');
    console.log(expense);
  };

  return (
    <div>
      <div className="App">
        <div className="expensesList">
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;

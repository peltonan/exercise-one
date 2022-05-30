import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'
import { useState } from 'react';

import { DUMMY_EXPENSES } from './components/Expenses/ExpensesData'

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
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

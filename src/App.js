import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import { expenses } from './components/Expenses/ExpensesList'

function App() {

  return (
    <div className="App">
      <div className="expensesList">
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
  );
}

export default App;

import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) => {

    const [year, setYear] = useState('');

    const filterChangeHandler = selectedYear => {
        setYear(selectedYear);
        console.log('App.js')
        console.log(selectedYear);
    };

    console.log('Expenses.js: ', props.expenses);

    return (
        <div>
            <ExpensesFilter onChangeFilter={filterChangeHandler} />
            {
                props.expenses.map(expense => {
                    return (
                        <ExpenseItem
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            key={expense.id}
                        />

                    )
                }
                )
            }
        </div>
    );
};

export default Expenses;
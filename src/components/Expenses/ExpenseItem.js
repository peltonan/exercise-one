import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import { useState } from 'react';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log('Clicked!');
    };

    return (
        <div className="expense-item">

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}€</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>

    );
}

export default ExpenseItem;
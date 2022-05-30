import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import { useEffect, useState } from 'react';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log('Clicked!');
    };

    return (
        <li>
            <div key={props.title} className="expense-item">

                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount}€</div>
                </div>
                {/*  <button onClick={clickHandler}>Change Title</button> */}
            </div>
        </li>
    );
}

export default ExpenseItem;
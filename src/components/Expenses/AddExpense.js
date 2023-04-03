import './AddExpense.css';
import {useState} from "react";

export const NewExpense = (props) => {
    let saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <AddExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export const AddExpenseForm = (props) => {

    const [title, getEnteredTitle] = useState("");
    const [amount, getEnteredAmount] = useState("");
    const [date, getEnteredDate] = useState("");


    const titleChangeHandler = (event) => {
        getEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        getEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        getEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        getEnteredTitle("");
        getEnteredAmount("");
        getEnteredDate("");

        props.onSaveExpenseData(expenseData);
    };

    const [formState, setFormState] = useState(false);

    const closeFormHandler = () => {
        setFormState(false)
    };

    const showFormHandler = () => {
        setFormState(true)
    };

    const form = (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button onClick={closeFormHandler}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
    
    const showFormButton = (
        <div>
            <button onClick={showFormHandler}>Add Expense</button>
        </div>
    );

    return formState ? form : showFormButton;
}


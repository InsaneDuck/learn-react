import "./AddExpense.css";
import {useState} from "react";

export const NewExpense = (props) => {
    let saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <AddExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};
export const AddExpenseForm = (props) => {
    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        date: ""
    });
    const [formState, setFormState] = useState(false);

    const onChangeInput = (event, key) => {
        setExpense(prevState => ({
            ...prevState,
            [key]: event.target.value,
        }));
        console.log(expense)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        let expenseData = new FormData(event.currentTarget);
        console.log("expense", expenseData);
        const e = {
            title: expenseData.title,
            amount: expenseData.amount,
            date: Date.parse(expenseData.date),
        };
        console.log("expense", e);
        //props.onSaveExpenseData(expenseData);
    };
    const form = (
        <form onSubmit={onSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name="title" type="text" onChange={(event) => onChangeInput(event, "title")}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input name="amount" type="number" min="0.01" step="0.01"
                           onChange={(event) => onChangeInput(event, "amount")}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input name="date" type="date" value={expense.date}
                           onChange={(event) => onChangeInput(event, "date")}/>
                </div>
                <div className="new-expense__actions">
                    <button onClick={() => setFormState(false)}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );

    const showFormButton = (
        <div>
            <button onClick={() => setFormState(true)}>Add Expense</button>
        </div>
    );

    return formState ? form : showFormButton;
};

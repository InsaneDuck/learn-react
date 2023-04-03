import {ExpenseItems} from "./components/Expenses/ExpenseItems";
import {NewExpense} from "./components/Expenses/AddExpense";
import {useState} from "react";

const App = () => {

    const [expenses, setExpenses] = useState([
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ])

    const addExpenseHandler = (expense) => {
        setExpenses([expense, ...expenses])
        // setExpenses(previousExpenses => {
        //     return [expense, ...previousExpenses]
        // });
        console.log(expenses);
    }


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseItems expenses={expenses}/>
        </div>
    );
}

export default App;

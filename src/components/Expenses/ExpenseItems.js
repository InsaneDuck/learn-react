import './ExpenseItems.css'
import {Card} from "../UI/Card";
import {useState} from "react";

export const ExpenseItems = (props) => {
    const expenses = props.expenses;
    return (
        <Card className="expenses">
            {expenses.map((expense) =>
                <ExpenseItem key={expense.id} expense={expense}/>)}
        </Card>
    )
}

export const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expense.title)
    const action = () => {
        setTitle("Updated")
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.expense.amount}</div>
            </div>
            <button onClick={action}>Change Title</button>
        </Card>
    );
}

export const ExpenseDate = (props) => {
    return (
        <div className="expense-date">
            <div className="expense-date__month">{props.date.toLocaleString('en-US', {month: 'long'})}</div>
            <div className="expense-date__day">{props.date.toLocaleString('en-US', {day: '2-digit'})}</div>
            <div className="expense-date__year">{props.date.getFullYear()}</div>
        </div>
    );
}

export const FilterExpenses = (props) => {
    const years = ["2018", "2019", "2020", "2021", "2022"];
    const [selectedYear, setSelectedYear] = useState("");
    const yearChangeHandler = (event) => {
        setSelectedYear(event.target.value);
        props.onChangingYear(selectedYear);
    };
    return (
        <div>
            <select onChange={yearChangeHandler}>
                {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
        </div>
    );
}

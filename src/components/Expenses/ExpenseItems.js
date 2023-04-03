import './ExpenseItems.css'
import {Card} from "../UI/Card";
import {useState} from "react";
import {ExpensesChart} from "./ExpensesChart";

export const ExpenseItems = (props) => {
    const initialExpenses = props.expenses;
    const years = [...new Set(initialExpenses.map(expense => expense.date.getFullYear()))]
    const [filterYear, setFilterYear] = useState("No Filter");

    let filteredExpenses = initialExpenses;
    if (filterYear !== "No Filter") {
        filteredExpenses = initialExpenses.filter(expense => expense.date.getFullYear().toString() === filterYear);
    }
    const filterYearHandler = (year) => {
        console.log(year)
        setFilterYear(year)
    };

    return (
        <Card className="expenses">
            <FilterExpenses years={years} onChangingYear={filterYearHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            {filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
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
    const years = props.years;
    const yearChangeHandler = (event) => {
        props.onChangingYear(event.target.value);
    };

    function resetFilterHandler() {
        props.onChangingYear("No Filter")
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
                <select onChange={yearChangeHandler}>
                    <option key={0} value={null}>No Filter</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
                <button onClick={resetFilterHandler}>Reset</button>
            </div>
        </div>
    );
}

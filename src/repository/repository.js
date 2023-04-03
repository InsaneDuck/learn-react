export const getExpenses = () => {
    let val;
    fetch('http://localhost:8080/expenseItems')
        .then(response => response.json())
        .then(data => val = data)
    return val;
}
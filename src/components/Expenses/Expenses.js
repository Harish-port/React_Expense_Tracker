import React, { useState, useEffect } from 'react';
import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(data => data.date.getFullYear().toString() === filteredYear);
    console.log(filteredExpenses);
    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map(item =>
                    <ExpenseItems key={item.id} title={item.title} amount={item.amount} date={item.date} />
                )}
            </Card>
        </>
    )
}

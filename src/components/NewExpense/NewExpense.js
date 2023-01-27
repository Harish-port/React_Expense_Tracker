import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
    const [newExpenseForm, setNewExpenseForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData, "e><>>>");
    }
    const addNewExpense = () => {
        setNewExpenseForm(true);
    }
    const onCancelHandler = () => {
        setNewExpenseForm(false);
    } 
    return (
        <div className='new-expense'>
            {newExpenseForm ?
                <ExpenseForm onCancel={onCancelHandler} onSaveExpenseData={saveExpenseDataHandler} /> :
                <button onClick={addNewExpense}>Add New Expense</button>}
        </div>
    )
}

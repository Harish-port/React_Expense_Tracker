import React from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>
                        Title
                    </label>
                    <input type="text" />
                </div>
            </div>
        </form>
    )
}

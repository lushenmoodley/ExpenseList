import './ExpenseDate.css';
import React from 'react';

const ExpenseDate = (props) =>
{
    const Month=props.date.toLocaleString('en-US',{month:'long'});
    const Day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const Year=props.date.getFullYear();
  
     return(
        <div class="expense-date">
        <div className="expense-date__month">{Month}</div>
        <div className="expense-date__year">{Year}</div>
        <div className="expense-date__date">{Day}</div>
      </div>
     );
}

export default ExpenseDate;

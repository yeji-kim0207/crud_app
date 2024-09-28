import React from 'react';
import "./ExpenseItem.css"

const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
    /*list컴포넌트에서 받아온 객체를 사용하여 아이템을 만듦.*/
    return (
        <li>
            <div>
                <span>{expense.charge}</span>
                <span>{expense.amount}원</span>
            </div>
            <div>
                <button onClick={() => handleEdit(expense.id)}>
                    수정
                </button>
                <button onClick={() => handleDelete(expense.id)}>
                    삭제
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem;
import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css"


const ExpenseList = ({ initialExpenses, handleDelete, handleEdit, handelDeleteList }) => {
    return (
        <>
            <ul className='list'>
                {/*익스펜스 아이템*/}
                {
                    initialExpenses.map(expense => {
                        return <ExpenseItem 
                            handleDelete={handleDelete} 
                            handleEdit={handleEdit}
                            key={expense.id} 
                            expense={expense} 
                        />
                    }) /*app컴포넌트에서 불러온 리스트 내의 객체를 하나씩 아이템 컴포넌트의 프롭으로 전달해줌*/
                }
            </ul>
            <button onClick={handelDeleteList}>
                목록 지우기
            </button>
           
        </>
    )
}

export default ExpenseList;
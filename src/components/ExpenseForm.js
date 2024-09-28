import React from 'react';
import "./ExpenseForm.css"

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return (
        <form>
            <div>
                <div>
                    <label htmlFor='charge'>지출 항목</label>
                    <input
                        type='text'
                        id="charge"
                        name="charge"
                        placeholder='예) 렌트비'
                        value = {charge}
                        onChange={handleCharge}  
                        /*타이핑을 할때마다 handleCharge 함수가 실행됨.*/
                    />
                </div>
                <div>
                    <label htmlFor='charge'>비용</label>
                    <input
                        type='number'
                        id="amount"
                        name="amount"
                        placeholder='예) 100'
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button onClick={handleSubmit}>
                {edit ? "수정" : "제출"}
            </button>
        </form>
    )
}

export default ExpenseForm;
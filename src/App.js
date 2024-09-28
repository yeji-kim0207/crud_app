import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import "./App.css"

function App() {

  const [expenses, setExpenses] = useState([
    {id: 1, charge: "렌트비", amount: 1000}
  ]) /*메인이 되는 객체를 정의*/

  const [edit,setEdit] = useState(false)
  /*수정버튼을 눌렀을때 바뀌는 상태를 state로 관리*/

  const [Id, setId] = useState('') /*수정할 id를 state로 관리*/

  const [charge,setCharge] = useState("")
  const [amount, setAmount] = useState(0)
/*지출 항목과 비용을 state로 관리*/


  const handleCharge = (e) => {
    setCharge(e.target.value)
  }
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  } /*지출 항목과 금액을 입력할때마다 state값에 반영(제출버튼과는 다름!!)*/




  const handleSubmit = (e) => {
    e.preventDefault() 
    /*이벤트 버블링 막음(새로고침 되는 것을 막음)*/

    if (charge !== "" && amount > 0) {
      if(edit) { /*버튼이 수정상태이면*/

        const newExpenses = expenses.map(item => {
          return item.id === Id ?
          {...item, charge, amount} : item
        }) /*현재 이벤트가 발생한 id를 찾고 기존의 객체에 새로운 값들을 덮어씀*/

        setExpenses(newExpenses)
        setEdit(false) /*state값을 바꿔주고, 버튼도 다시 제출 상태로 변경*/

        
      } else { /*버튼이 제출상태이면*/
        const newExpense ={
          id:crypto.randomUUID(),
          charge,
          amount
        }

        setExpenses([...expenses,newExpense]) /*새로운 객체를 생성한 후, 리스트를 다시 정의함*/
      }

      setCharge("")
      setAmount(0) /*지출항목과 비용 초기화*/

    } else {
      console.log('error');
    } 
  } //제출, 수정버튼 구현





  const handleDelete = (id) => {
  const newExpenses = expenses.filter(expense => expense.id !== id)
  setExpenses(newExpenses) 
  } /*삭제 버튼 구현 : 삭제 버튼을 눌렀을때 id에 해당하는 객체만 제외하고 state값으로 전달 */

  const handleEdit = (id) => {
    const expense = expenses.find(item => id === id)
    /*expenses에서 파라미터로 받은 id를 가지고 있는 객체를 찾아서 리턴함*/
    const { charge, amount } = expense; //리턴한 item의 항목과 값을 변수에 할당
    setCharge(charge)
    setAmount(amount)
    //항목과 비용을 state값으로 전달
    setEdit(true) // 제출버튼을 수정버튼으로 변경
    setId(id) //현재 수정중인 id의 값을 state로 전달
  } /*item의 수정 버튼 구현 : 파라미터로 받은 id를 객체에서 찾은 후 해당하는 값들을 수정 칸으로 올려줌*/


  const handleDeleteList = () => {
    setExpenses([])
  } //목록 지우기 버튼 구현

  return (
    <main className='main-container'>
      <h1>예산 계산기</h1>

      <div style={{width: '100%', backgroundColor: 'white', padding:'10px'}}>
        <ExpenseForm
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
          charge={charge}
          amount={amount}
        />
      </div>

      <div style={{width: '100%', backgroundColor: 'white', padding:'10px'}}>
        <ExpenseList 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handelDeleteList={handleDeleteList}
          initialExpenses={expenses}/> 
      </div>

      <div style={{display:'flex', justifyContent: 'end', marginTop:'1rem'}}>
        <p>
          총지출 :
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount)
            }, 0)}
            원</span>
        </p>
      </div>
    </main>
      
  );
}


export default App;

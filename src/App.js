import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.17,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Rent",
    amount: 100.17,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {

 const [expense, setExpenses]=useState(dummy_expense);

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses]
    });
  };

  
  /*
  The jsx below is just syntax code. We need the import statement in the past but not now in modern react projects*/
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>      
      <Expenses items={expense}></Expenses> 
    </div>

/*The code below shows you an alternative way to call the jsx code*/

  );
}

export default App;

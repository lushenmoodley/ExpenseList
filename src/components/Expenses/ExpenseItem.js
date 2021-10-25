import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

/*React ensure we pass one parameter*/
/*Props-passing an object that holds all the property values which we get for our custom elements*/
/*We can name parameter data not even prop but for good coding practices name it props*/
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //use state is a react hooks. use is an indication its react hooks, and it must be called inside a component function
  //Para=nameforTheValue,setNameForTheValue--you can choose any name of your choice
  console.log("ExpenseItem evaluated by react");

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

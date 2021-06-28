import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";



const ExpenseItem = (props) => {
  return (
    <Card className="single single-card m-5 d-flex justify-content-between">
     <ExpenseDate date={props.date}/>
      <div className="expense-item-description">
        <h1>{props.title}</h1>
        </div>
        <div className="expense-item-price">${props.amount}</div>
      
    </Card>
  );
};

export default ExpenseItem;

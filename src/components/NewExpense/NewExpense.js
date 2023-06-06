import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Card className="new-expense">
      {!isVisible && <button type="button" onClick={clickHandler}>Show Form</button>}
      {isVisible && <ExpenseForm onCancel={clickHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </Card>
  );
};

export default NewExpense;

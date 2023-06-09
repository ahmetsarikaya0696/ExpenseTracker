import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Headline from "./components/Headline/Headline";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Pencil", amount: 94.12, date: new Date(2020, 7, 14) },
  { id: "e2", title: "New TV", amount: 799.99, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: "e4", title: "New Desk", amount: 450, date: new Date(2021, 5, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <Headline />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

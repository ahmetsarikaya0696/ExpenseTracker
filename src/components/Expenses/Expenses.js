import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const years = props.expenses.map((expense) =>
    new Date(expense.date).getFullYear()
  );
  const distinctYears = years.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    const expenseYear = new Date(expense.date).getFullYear();
    return expenseYear == filteredYear;
  });

  const expensesContent = filteredExpenses.map((expense) => (
    <li>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </li>
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter
        years={distinctYears}
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />

      <ul className="expenses-list">{expensesContent}</ul>
    </Card>
  );
};

export default Expenses;

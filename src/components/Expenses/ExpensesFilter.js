import React from "react";
import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const selectChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={selectChangeHandler}>
          {props.years.map((year) => (
            <option key={year} value={year}>{year.toString()}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

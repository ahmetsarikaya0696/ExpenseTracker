import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} year={year} day={day} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₺ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

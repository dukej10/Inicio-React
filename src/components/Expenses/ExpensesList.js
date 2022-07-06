import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesLlist.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No se encontraron gastos</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={
            expense.id
          } /* Identificador único para poder saber el orden para agregarlo al componente*/
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // obtener gastos que coincidan con el año seleccionado
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
  ///////////////////////////////

  // return (
  //   <Card className="expenses">
  //     <ExpensesFilter
  //       selected={filteredYear}
  //       onChangeFilter={filterChangeHandler}
  //     />
  //     {filteredExpenses.length === 0 ? (
  //       <p>No se encontraron gastos</p>
  //     ) : (
  //       filteredExpenses.map((expense) => (
  //         <ExpenseItem
  //           key={
  //             expense.id
  //           } /* Identificador único para poder saber el orden para agregarlo al componente*/
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         />
  //       ))
  //     )}
  //   </Card>
  // );
};

export default Expenses;

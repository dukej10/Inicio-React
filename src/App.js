import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 100,
    date: new Date(2022, 2, 4),
  },
  {
    id: "e2",
    title: "Car Repair",
    amount: 300.3,
    date: new Date(2022, 7, 3),
  },
  {
    id: "e3",
    title: "Fines payment",
    amount: 500.2,
    date: new Date(2022, 7, 3),
  },
  {
    id: "e4",
    title: "Car purchased",
    amount: 1500,
    date: new Date(2022, 2, 3),
  },
  {
    id: "e5",
    title: "House purchased",
    amount: 100000,
    date: new Date(2021, 2, 3),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // Agregar nuevo gasto
  const addExpense = (expense) => {
    console.log(expense);
    setExpenses((prevExpense) => {
      console.log(prevExpense);
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      {
        <NewExpense
          onAddExpense={addExpense}
        /> /*Se manda una función para  guardar datos*/
      }
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

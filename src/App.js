import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
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
  ];

  const addExpense = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [reload, setReload] = useState(false);
  const handleAdd = () => setReload(!reload);

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">💰 Control de Gastos</h1>
      <ExpenseForm onAdd={handleAdd} />
      <ExpenseList reload={reload} />
    </div>
  );
}

export default App;

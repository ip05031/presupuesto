import { useEffect, useState } from "react";

function ExpenseList({ reload }) {
  const [gastos, setGastos] = useState([]);

  const cargarGastos = async () => {
    const res = await fetch("https://ipdev-apps.com/api_gastos/gastos/list.php");
    const data = await res.json();
    setGastos(data);
  };

  useEffect(() => {
    cargarGastos();
  }, [reload]);

  return (
    <div className="card p-4">
      <h4 className="mb-3">Lista de Gastos</h4>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((gasto) => (
            <tr key={gasto.id}>
              <td>{gasto.fecha}</td>
              <td>{gasto.categoria}</td>
              <td>{gasto.descripcion}</td>
              <td>${parseFloat(gasto.monto).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;

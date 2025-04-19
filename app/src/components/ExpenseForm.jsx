import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    monto: "",
    categoria: "",
    descripcion: "",
    fecha: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://ipdev-apps.com/api_gastos/gastos/create.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.success) {
      onAdd();
      setForm({ monto: "", categoria: "", descripcion: "", fecha: "" });
    } else {
      alert("Error al guardar");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4">
      <div className="row g-3">
        <div className="col-md-3">
          <input name="monto" type="number" className="form-control" placeholder="Monto" value={form.monto} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input name="categoria" className="form-control" placeholder="Categoría" value={form.categoria} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input name="descripcion" className="form-control" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input name="fecha" type="date" className="form-control" value={form.fecha} onChange={handleChange} required />
        </div>
      </div>
      <div className="mt-3 text-end">
        <button type="submit" className="btn btn-primary">Agregar Gasto</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

import React, { useState } from "react";

const AprobacionMateria = () => {
  const [alumno, setAlumno] = useState({ nombre: "", nota1: 0, nota2: 0, nota3: 0 });

  const handleChange = (event) => {
    setAlumno({
      ...alumno,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const promedio = (parseFloat(alumno.nota1) + parseFloat(alumno.nota2) + parseFloat(alumno.nota3)) / 3;
    setAlumno({
      ...alumno,
      promedio: promedio,
    });
  };

  return (
    <div>
      <h2>Punto 11</h2>
      <p />
      <h2>Verificar aprobación de materia</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={alumno.nombre} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nota 1:
          <input type="number" name="nota1" value={alumno.nota1} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nota 2:
          <input type="number" name="nota2" value={alumno.nota2} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nota 3:
          <input type="number" name="nota3" value={alumno.nota3} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Calcular promedio</button>
      </form>
      {alumno.promedio && (
        <p>
          El alumno {alumno.nombre} {alumno.promedio >= 3 ? "aprueba" : "no aprueba"} la materia.
        </p>
      )}
    </div>
  );
};

export default AprobacionMateria;
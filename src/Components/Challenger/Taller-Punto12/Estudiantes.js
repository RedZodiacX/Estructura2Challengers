import React from "react";

const Estudiantes = () => {
  const estudiantes = [
    { nombre: "Juan", notas: [3, 4, 5] },
    { nombre: "Ana", notas: [4, 5, 5] },
    { nombre: "Pedro", notas: [2, 2, 3] },
    { nombre: "María", notas: [5, 4, 5] },
    { nombre: "Luis", notas: [3, 3, 4] },
  ];

  const calcularPromedio = (notas) => {
    const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    const promedio = sumaNotas / notas.length;
    return promedio;
  };

  const ganaMateria = (notas) => {
    const promedio = calcularPromedio(notas);
    return promedio >= 3;
  };

  return (
    <div>
      <h2>Punto 12</h2>
      <p />
      <div>
        <h2>Estudiantes</h2>
        {estudiantes.map((estudiante, index) => (
          <div key={`estudiante-${index}`}>
            <h3>{estudiante.nombre}</h3>
            <p>Notas: {estudiante.notas.join(", ")}</p>
            <p>{ganaMateria(estudiante.notas) ? "Gana la materia" : "No gana la materia"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estudiantes;
import React, { useState } from 'react';

function Matriz() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [table, setTable] = useState([]);

  const createTable = () => {
    let newTable = [];
    for (let i = 0; i < rows; i++) {
      let newRow = [];
      for (let j = 0; j < cols; j++) {
        newRow.push(Math.floor(Math.random() * 10));
      }
      newTable.push(newRow);
    }
    
    // Sumar cada columna
    let sums = new Array(cols).fill(0);
    for (let j = 0; j < cols; j++) {
      for (let i = 0; i < rows; i++) {
        if (typeof newTable[i][j] === 'number') {
          sums[j] += newTable[i][j];
        }
      }
    }

    // Agregar fila de suma
    newTable.push(sums);

    setTable(newTable);
  };

  const handleRowsChange = (e) => {
    const { value } = e.target;
    setRows(value);
  };

  const handleColsChange = (e) => {
    const { value } = e.target;
    setCols(value);
  };

  return (
    <div>
      <h2>Punto 10</h2>
      <p />
      <label htmlFor="rows">Filas: </label>
      <input type="number" id="rows" value={rows} onChange={handleRowsChange} />
      <br />
      <label htmlFor="cols">Columnas: </label>
      <input type="number" id="cols" value={cols} onChange={handleColsChange} />
      <br />
      <button onClick={createTable}>Crear Matriz</button>
      <br />
      {table.length > 0 && (
        <table border="1">
          <tbody>
            {table.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={`${i}-${j}`}>{cell || 0}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Matriz;

import React, { useState } from "react";

const Tabla = () => {
  const [numRows, setNumRows] = useState('');
  const [numCols, setNumCols] = useState('');
  const [isRender, setisRender] = useState(false);
  const [rowInput, setrowInput] = useState(0);
  const [columInput, setcolumInput] = useState(0);

  const createTable = () => {
    

    const rows = [];

    for (let i = 0; i < numRows; i++) {
      const cells = [];

      for (let j = 0; j < numCols; j++) {
        cells.push(
          <td key={`${i}-${j}`}>
            Fila {i + 1}, Columna {j + 1}
          </td>
        );
      }

      rows.push(<tr key={i}>{cells}</tr>);
    }

    return rows;
  };

  function handlenumRows (event){
    setrowInput(parseInt(event.target.value))
  }

  function handlenumCols (event){
    setcolumInput(parseInt(event.target.value))
  }

  function handleRenderClic (e){
    e.preventDefault()
    const rowParse = parseInt(rowInput)
    const columParse = parseInt(columInput)
    if (isNaN(rowParse) || isNaN(columParse) || rowParse <= 0 || columParse <= 0) {
      alert("Debe ingresar valores numéricos positivos");
    }
    else {
      setNumRows(rowParse)
      setNumCols(columParse)    
      setisRender(true)
    }
    
  }

  return (
    <>
    <form  className='form' onSubmit={(e) => e.preventDefault()}>
      <h2>Punto 9</h2>
      <p />
      <div>
        <h1>Crear tabla</h1>
        <label htmlFor="numRows">Número de filas: </label>
        <input
          type="number"
          id="numRows"
          value={rowInput}
          onChange={handlenumRows}
        />
        <br />
        <label htmlFor="numCols">Número de columnas: </label>
        <input
          type="number"
          id="numCols"
          value={columInput}
          onChange={handlenumCols}
        />
        <br />
        <p />
        <button onClick={handleRenderClic}>Crear tabla</button>
        </div>
        </ form>
        {isRender && <table>
        <tbody>{createTable()}</tbody>
        </table> }
      </>
  );
};

export default Tabla;

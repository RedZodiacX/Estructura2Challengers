import React from "react";
import CalculadoraLlamada from "./CalculadoraLlamada";

class CalcularCostoLLamada extends React.Component {
  render() {
    return (
      <div>
        <h2>Punto 2</h2>
        <p />
        <div>
          <CalculadoraLlamada duracion={2} />
          <CalculadoraLlamada duracion={3} />
          <CalculadoraLlamada duracion={5} />
        </div>
      </div>
    );
  }
}

export default CalcularCostoLLamada;

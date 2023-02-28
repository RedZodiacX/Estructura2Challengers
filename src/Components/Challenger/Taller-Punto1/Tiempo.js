import React from "react";
import ConvertidorTiempo from "./ConvertidorTiempo";

class Tiempo extends React.Component {
  render() {
    return (
      <div>
      <h2>Punto 1</h2>
      <p />
      <div>
        <ConvertidorTiempo segundos={36000} />
        <ConvertidorTiempo segundos={3661} />
        <ConvertidorTiempo segundos={7325} />
      </div>
      </div>      
    );
  }
}

export default Tiempo;

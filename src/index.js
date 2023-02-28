import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { FirstApp } from './Components/Challenger/FirstApp';
import CalcularCostoLLamada from './Components/Challenger/Taller-Punto2/calcularCostoLlamada';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CalcularCostoLLamada />
  </React.StrictMode>
);
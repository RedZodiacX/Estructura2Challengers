import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { FirstApp } from './Components/Challenger/FirstApp';
import Estudiantes from './Components/Challenger/Taller-Punto12/Estudiantes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Estudiantes />
  </React.StrictMode>
);
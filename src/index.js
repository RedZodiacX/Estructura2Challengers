import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FirstApp } from './Components/Challenger/FirstApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);
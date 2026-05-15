import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './styles/global.css';
import App from './App';

// === Скрываем все лишние предупреждения Three.js и WebGL ===
const originalWarn = console.warn.bind(console);
console.warn = (...args: any[]) => {
  const msg = String(args[0] || '');
  
  if (
    msg.includes('THREE.Clock') ||
    msg.includes('THREE.WebGLProgram') ||
    msg.includes('X4122') ||
    msg.includes('cannot be represented accurately')
  ) {
    return;
  }
  
  originalWarn(...args);
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
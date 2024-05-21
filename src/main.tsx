import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '../context/ThemeContext';
import { BanksProvider } from '../context/BanksContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BanksProvider>
        <App />
      </BanksProvider>
    </ThemeProvider>
  </React.StrictMode>
);

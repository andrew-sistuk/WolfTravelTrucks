import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@fontsource/inter';
import '@fontsource/inter/300.css'; // Легкий (300)
import '@fontsource/inter/400.css'; // Нормальний (400)
import '@fontsource/inter/500.css'; // Середній (500)
import '@fontsource/inter/700.css'; // Напівжирний (700)
import '@fontsource/inter/900.css'; // Напівжирний (700)
import './index.css';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

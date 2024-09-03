//стилі

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './index.css';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appState } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appState}>
      {/*  <PersistGate persistor={persistor}>*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/*  </PersistGate>*/}
    </Provider>
  </StrictMode>
);

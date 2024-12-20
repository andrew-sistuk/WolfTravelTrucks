//стилі

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './App.jsx';
import '@fontsource/inter';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './index.css';
import 'modern-normalize';

import { appState, persistor } from 'myRedux';
import { ModalProvider } from 'helpers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appState}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ModalProvider>
            <App />
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

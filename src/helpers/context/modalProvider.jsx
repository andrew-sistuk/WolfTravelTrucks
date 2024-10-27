import { useState } from 'react';
import { modalProvider } from './modalContext.js';

export const ModalProvider = ({ children }) => {
  const defaultModal = {
    isOpen: false,
    type: 'photo',
    data: null,
  };

  const [modal, setModal] = useState(defaultModal);

  return (
    <modalProvider.Provider value={{ modal, setModal }}>
      {children}
    </modalProvider.Provider>
  );
};

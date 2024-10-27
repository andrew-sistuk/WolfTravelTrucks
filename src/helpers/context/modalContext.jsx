import { createContext, useState } from 'react';
import { produce } from 'immer';

const defaultModal = {
  isOpen: false,
  type: 'photo',
  data: null,
};

const modalContext = createContext();

// export const useModal = () => useContext(modalContext);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(defaultModal);

  const setImmerModal = obj => {
    setModal(prevValue => produce(prevValue, obj));
  };

  return (
    <modalContext.Provider value={{ modal, setImmerModal }}>
      {children}
    </modalContext.Provider>
  );
};

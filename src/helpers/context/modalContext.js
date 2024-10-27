import { createContext, useContext } from 'react';

export const modalProvider = createContext();

export const useModal = () => useContext(modalProvider);

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  //// Callback Functions
  const addToast = useCallback(() => {}, []);

  const removeToast = useCallback(() => {}, []);

  //// Return provider
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };

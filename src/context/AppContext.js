import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export const initialState = {
  toast: {
    showToast: false,
    toastMessage: '',
    theme: ''
  },
  pagination: {
    assets: [],
    page: 0,
    contentPerPage: 5,
    totalAssets: 0,
    nextPage: 0,
    previousPage: 0,
    totalPages: 0,
    startDate: undefined,
    endDate: undefined
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

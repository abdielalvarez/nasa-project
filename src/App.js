import React from 'react';
import { AppProvider } from './context/AppContext';
import Router from './Router';
import './styles/app.scss';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;

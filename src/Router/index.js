import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import { HOME_ROUTE } from '../utils/routes';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;

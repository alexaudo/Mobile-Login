import React from 'react'
import { BrowserRouter as Router, Routes as AppRoutes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Users from './containers/Users';

function Routes() {
  return (
    <Router>
      <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </AppRoutes>
    </Router>
  );
}

export default Routes;

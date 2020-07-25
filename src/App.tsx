import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Customers from './pages/customer';
import Addresses from './pages/customer/addresses';

function App() {
  return (
    <>
      <h1>Customer Info</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Customers />
          </Route>
          <Route exact path="/customers">
            <Customers />
          </Route>
          <Route exact path="/customer/:id">
            <Addresses />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

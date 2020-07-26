import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Customers from './pages/customer';
import Addresses from './pages/customer/addresses';
import { Routes } from './model';
import { Provider } from 'react-redux';
import { AppStore } from './data-store';

function App() {
  return (
    <Provider store={AppStore}>
      <h1>Customer Info</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Customers />
          </Route>
          <Route exact path={Routes.CUSTOMERS}>
            <Customers />
          </Route>
          <Route exact path={Routes.ADDRESSES}>
            <Addresses />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { customerReducer } from "./customers/customer-reducer";
import { addressesReducer } from "./addresses/address-reducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  address: addressesReducer,
});

export const AppStore = createStore(rootReducer, applyMiddleware(logger));

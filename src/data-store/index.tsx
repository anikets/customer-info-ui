import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import { customerReducer } from "./customers/customer-reducer";
import { addressesReducer } from "./addresses/address-reducer";
import { IWindow } from "../model";

declare const window: IWindow;

const rootReducer = combineReducers({
  customer: customerReducer,
  address: addressesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const AppStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

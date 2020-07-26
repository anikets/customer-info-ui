export enum Actions {
  GET_CUSTOMERS_START = 'GET_CUSTOMERS_START',
  GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS',
  GET_CUSTOMERS_ERROR = 'GET_CUSTOMERS_SUCCESS',

  GET_ADDRESSES_START = 'GET_ADDRESSES_START',
  GET_ADDRESSES_SUCCESS = 'GET_ADDRESSES_SUCCESS',
  GET_ADDRESSES_ERROR = 'GET_ADDRESSES_ERROR',
}

export enum Endpoints {
  // todo read port from env variable for supporting different envs
  GET_CUSTOMERS = 'http://localhost:3004/api/v1/customers',
  GET_ADDRESSES = 'http://localhost:3004/api/v1/customer/:id',
}

export enum Routes {
  CUSTOMERS = '/customers',
  ADDRESSES = '/customer/:id',
}

export interface Customer {
  ID: string,
  CreatedAt: number;
  Name: string;
}

export interface CustomerState {
  loading: boolean;
  customers: Customer[];
  error: string;
}

export interface Address {
  ID: string;
  customerId: string;
  CreatedAt: number;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  pin: string;
}

export interface AddressState {
  loading: boolean;
  addresses: Address[];
  error: string;
}

export interface GenericAction {
  type: string;
}

export interface AddressesAction extends GenericAction {
  customerId: string;
}

export interface PayloadAction extends GenericAction {
  payload: [];
}

export interface ErrorAction extends GenericAction {
  error: { message: string };
}

export interface AppState {
  customer: CustomerState;
  address: AddressState;
}

export interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

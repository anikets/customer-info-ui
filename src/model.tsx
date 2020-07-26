export enum Actions {
  GET_CUSTOMERS = 'GET_CUSTOMERS',
  GET_ADDRESSES = 'GET_ADDRESSES',
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
  id: string,
  createdAt: number;
  name: string;
}

export interface CustomerState {
  loading: boolean;
  customers: Customer[];
  error: string;
}

export interface Address {
  id: string;
  customerId: string;
  createdAt: number;
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

export interface AppState {
  customer: CustomerState;
  address: AddressState;
}

export interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

export enum Actions {
  GET_CUSTOMERS = 'GET_CUSTOMERS',
  GET_ADDRESSES = 'GET_ADDRESSES',
}

export enum Endpoints {
  GET_CUSTOMERS = 'https://5f1d868f39d95a00169540f9.mockapi.io/api/v1/customers',
  GET_ADDRESSES = 'https://5f1d868f39d95a00169540f9.mockapi.io/api/v1/customer/:id',
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

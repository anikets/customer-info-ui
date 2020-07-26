import Axios from 'axios'
import { Endpoints } from '../../model';
export const customerApi = {
  fetchCustomers: Axios.get(Endpoints.GET_CUSTOMERS)
};
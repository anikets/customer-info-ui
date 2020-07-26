import { Actions, GenericAction, PayloadAction, ErrorAction, Endpoints } from "../../model";
import Axios from "axios";

export const getCustomersStart = () => {
  return {
    type: Actions.GET_CUSTOMERS_START,
  } as GenericAction;
};

export const getCustomersSuccess = (customers: any) => {
  return {
    type: Actions.GET_CUSTOMERS_SUCCESS,
    payload: customers,
  } as PayloadAction;
};

export const getCustomersError = (error: { message: string }) => {
  return {
    type: Actions.GET_CUSTOMERS_ERROR,
    error,
  } as ErrorAction;
};

export const fetchCustomers = () => {
  return async (dispatch: Function) => {
    console.info('Fetching addresses start');
    dispatch(getCustomersStart());

    try {
      const result = await Axios.get(Endpoints.GET_CUSTOMERS);
      console.info('Fetching customers successful', result);
      dispatch(getCustomersSuccess(result.data));
    } catch (e) {
      console.error('Fetching customers failed', e);
      dispatch(getCustomersError({
        message: e.data
      }));
    }
  }
};

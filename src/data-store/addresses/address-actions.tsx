import { Actions, AddressesAction, PayloadAction, ErrorAction, Endpoints } from "../../model";
import Axios from "axios";

export const getAddressesStart = () => {
  return {
    type: Actions.GET_ADDRESSES_START,
  } as AddressesAction;
};


export const getAddressesSuccess = (addresses: any) => {
  return {
    type: Actions.GET_ADDRESSES_SUCCESS,
    payload: addresses,
  } as PayloadAction;
};

export const getAddressesError = (error: { message: string }) => {
  return {
    type: Actions.GET_ADDRESSES_ERROR,
    error,
  } as ErrorAction;
};

export const fetchAddresses = (customerId: string) => {
  return async (dispatch: Function) => {
    console.info('Fetching addresses start');
    dispatch(getAddressesStart());

    try {
      const result = await Axios.get(Endpoints.GET_ADDRESSES.replace(':id', customerId));
      console.info('Fetching addresses successful\n', result);
      dispatch(getAddressesSuccess(result.data));
    } catch (e) {
      console.error('Fetching addresses failed\n', e);
      dispatch(getAddressesError({
        message: e && e.response && e.response.status >= 500
          ? e.response.data.message
          : 'Couldn\'t fetch addresses!',
      }));
    }
  }
};

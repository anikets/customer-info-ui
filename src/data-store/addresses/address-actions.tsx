import { Actions, AddressesAction } from "../../model";

export const getAddresses = (customerId: string) => {
  return {
    type: Actions.GET_ADDRESSES,
    customerId: customerId,
  } as AddressesAction;
};

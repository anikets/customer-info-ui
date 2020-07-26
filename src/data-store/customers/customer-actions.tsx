import { Actions, GenericAction } from "../../model";

export const getCustomers = () => {
  return {
    type: Actions.GET_CUSTOMERS
  } as GenericAction;
};

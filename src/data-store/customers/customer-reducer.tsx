import { Actions, CustomerState, GenericAction, PayloadAction, ErrorAction } from "../../model";

const initialState: CustomerState = {
  loading: false,
  customers: [],
  error: '',
};

export const customerReducer = (state: CustomerState = initialState,
  action: GenericAction | PayloadAction | ErrorAction) => {
  switch(action.type) {
    case Actions[Actions.GET_CUSTOMERS_START]:
      return {
        loading: true,
        error: '',
        customers: []
      } as CustomerState;
    
    case Actions[Actions.GET_CUSTOMERS_SUCCESS]:
      return {
        loading: false,
        error: '',
        customers: (action as PayloadAction).payload,
      } as CustomerState;

    case Actions[Actions.GET_CUSTOMERS_ERROR]:
      return {
        loading: false,
        error: (action as ErrorAction).error.message,
        customers: [],
      } as CustomerState;
    default:
      return state;
  }
};

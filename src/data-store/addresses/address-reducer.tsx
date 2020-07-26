import { Actions, AddressState, GenericAction, PayloadAction, ErrorAction } from "../../model";

const initialState: AddressState = {
  loading: false,
  error: '',
  addresses: [],
};

export const addressesReducer = (state: AddressState = initialState, action: GenericAction) => {
  switch(action.type) {
    case Actions[Actions.GET_ADDRESSES_START]:
      return {
        loading: true,
        error: '',
        addresses: [],
      };

    case Actions[Actions.GET_ADDRESSES_SUCCESS]:
      return {
        loading: false,
        error: '',
        addresses: (action as PayloadAction).payload,
      } as AddressState;

    case Actions[Actions.GET_ADDRESSES_ERROR]:
      return {
        loading: false,
        error: (action as ErrorAction).error
          ? (action as ErrorAction).error.message
          : 'Invalid customer.',
        addresses: [],
      } as AddressState;

    default:
      return state;
  }
};

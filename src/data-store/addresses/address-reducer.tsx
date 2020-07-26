import { Actions, AddressState, GenericAction } from "../../model";

const initialState: AddressState = {
  loading: false,
  addresses: [],
  error: '',
};

export const addressesReducer = (state: AddressState = initialState, action: GenericAction) => {
  switch(action.type) {
    case Actions[Actions.GET_ADDRESSES]:
      return {
        ...state,
        addresses: []
      };
    default:
      return state;
  }
};

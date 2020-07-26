import { Actions, CustomerState, GenericAction } from "../../model";

const initialState: CustomerState = {
  loading: false,
  customers: [],
  error: '',
};

export const customerReducer = (state: CustomerState = initialState, action: GenericAction) => {
  switch(action.type) {
    case Actions[Actions.GET_CUSTOMERS]:
      return {
        ... state,
        customers: [{"id":"1","createdAt":1595770647,"name":"name 1"},{"id":"2","createdAt":1595770587,"name":"name 2"},{"id":"3","createdAt":1595770527,"name":"name 3"},{"id":"4","createdAt":1595770467,"name":"name 4"},{"id":"5","createdAt":1595770407,"name":"name 5"},{"id":"6","createdAt":1595770347,"name":"name 6"},{"id":"7","createdAt":1595770287,"name":"name 7"},{"id":"8","createdAt":1595770227,"name":"name 8"},{"id":"9","createdAt":1595770167,"name":"name 9"},{"id":"10","createdAt":1595770107,"name":"name 10"},{"id":"11","createdAt":1595770047,"name":"name 11"},{"id":"12","createdAt":1595769987,"name":"name 12"},{"id":"13","createdAt":1595769927,"name":"name 13"},{"id":"14","createdAt":1595769867,"name":"name 14"}]
      };
    default:
      return state;
  }
};

import types from "../types";

export default function
  contactsReducer(state = {
    contacts: []
    , contact: { name: '', phone: '', email: ''}
  }, action) {
  switch (action.type) {
    case types.Get_CONTACTS:
      return { ...state, contacts: [...action.data] };
    case types.GET_BY_ID_CONTACT:
      return { ...state, contact: action.data };
    default:
      return state;
  }
}
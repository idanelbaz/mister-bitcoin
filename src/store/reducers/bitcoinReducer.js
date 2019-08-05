import types from "../types";

export default function
  bitcoinReducer(state = { bitcoin: 0, transPerDay: null, marketPrice:null }, action) {
  switch (action.type) {
    case types.Get_RATE:
      return { ...state, bitcoin: action.data };
    case types.TRANS_PER_DAY:
      return { ...state, transPerDay: action.data };
    case types.GET_MARKET_PRICE:
      return { ...state, marketPrice: action.data };
    default:
      return state;
  }
}
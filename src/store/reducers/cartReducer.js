import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
import { omit } from "lodash";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, [payload.id]: payload };
    case REMOVE_FROM_CART:
      return omit(state, payload);
    default:
      return state;
  }
};

import { ADD_TO_CART } from "../actions/types";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, [payload.id]: payload };

    default:
      return state;
  }
};

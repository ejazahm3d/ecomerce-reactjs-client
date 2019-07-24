import { FETCH_ALL_PRODUCTS, FETCH_PRODUCT_ID } from "../actions/types";
import { mapKeys } from "lodash";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_PRODUCTS:
      return { ...state, ...mapKeys(payload, "id") };
    case FETCH_PRODUCT_ID:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

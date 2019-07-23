import { FETCH_ALL_PRODUCTS } from "../actions/types";
import { mapKeys } from "lodash";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_PRODUCTS:
      return { ...state, ...mapKeys(payload, "id") };

    default:
      return state;
  }
};

import { FETCH_ALL_PRODUCTS } from "./types";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

export const fetchAllProducts = () => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/api/product`);
    dispatch({
      type: FETCH_ALL_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

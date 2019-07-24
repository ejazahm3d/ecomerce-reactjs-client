import { FETCH_ALL_PRODUCTS, FETCH_PRODUCT_ID } from "./types";
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

export const fetchProductById = id => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/api/product/${id}`);
    dispatch({
      type: FETCH_PRODUCT_ID,
      payload: res.data
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(errors);
  }
};

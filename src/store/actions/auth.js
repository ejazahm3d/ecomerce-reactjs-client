import { CREATE_USER } from "./types";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";
export const createUser = data => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(data);
  try {
    const res = axios.post(`${baseUrl}/`, body, config);
    dispatch({ type: CREATE_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

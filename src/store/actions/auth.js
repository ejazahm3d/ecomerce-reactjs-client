import {
  CREATE_USER,
  REGISTER_FAILED,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_PROFILE,
  LOGOUT
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../../components/App";

const baseUrl = "http://localhost:5000";

// Load User

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${baseUrl}/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const createUser = data => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(`${baseUrl}/api/users`, body, config);
    dispatch({ type: CREATE_USER, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      console.log(errors);
      errors.forEach(error => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({ type: REGISTER_FAILED });
  }
};

// Login User
export const login = data => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(data);

  try {
    const res = await axios.post(`${baseUrl}/api/auth`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

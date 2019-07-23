import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (message, variant, timeout = 5000) => dispatch => {
  const id = uuid.v1();
  dispatch({
    type: SET_ALERT,
    payload: { message, variant, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const removeAlert = id => ({
  type: REMOVE_ALERT,
  payload: id
});

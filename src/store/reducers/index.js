import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cart from "./cartReducer";
import auth from "./authReducer";
import alert from "./alertReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};
const rootReducer = combineReducers({ cart, auth, alert });

export default persistReducer(persistConfig, rootReducer);

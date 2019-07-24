import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cart from "./cartReducer";
import auth from "./authReducer";
import alert from "./alertReducer";
import product from "./productReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"]
};
const rootReducer = combineReducers({ cart, auth, alert, product });

export default persistReducer(persistConfig, rootReducer);

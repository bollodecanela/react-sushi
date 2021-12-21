import { combineReducers } from "redux";

import categoryReducer from "./category";
import sushiReducer from "./sushi";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  category: categoryReducer,
  cart: cartReducer,
  sushi: sushiReducer,
});

export default rootReducer;

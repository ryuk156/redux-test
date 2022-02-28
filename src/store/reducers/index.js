import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer= combineReducers({
    count: countReducer,
    cart: cartReducer
})
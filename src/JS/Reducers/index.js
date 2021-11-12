import { combineReducers } from "redux";
import { contactReducers } from "./contacts";
export const rootReducer = combineReducers({ contactReducers });

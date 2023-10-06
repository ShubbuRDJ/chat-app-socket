import { combineReducers } from "redux";
import { getAllUserReducer } from "./Admin/manage user/Reducer/manageUserReducer";
export const reducers = combineReducers({
manageUserGet:getAllUserReducer,
});
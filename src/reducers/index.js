import {combineReducers} from "redux"
import authReducer from "./authReducer";
import {reducer as fromReducer} from "redux-form";
import streamReducer from "./stramReducer";

export default combineReducers({
    auth:authReducer,
    streams:streamReducer,
    form:fromReducer
})

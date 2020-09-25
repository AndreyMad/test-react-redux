import  {getUsers,viewReducer, filterReducer}  from './reducers';
import { combineReducers } from "redux";

export const app =  combineReducers({
    users:getUsers,
    view:viewReducer,
    some: filterReducer

})
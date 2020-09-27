import  {getUsers,viewReducer, filterReducer,isLoadingReducer }  from './reducers';
import { combineReducers } from "redux";

export const app =  combineReducers({
    users:getUsers,
    view:viewReducer,
    some: filterReducer,
    isLoading: isLoadingReducer

})
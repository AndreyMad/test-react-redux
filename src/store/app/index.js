import  {getUsers,viewReducer, filterReducer,isLoadingReducer,errorReducer }  from './reducers';
import { combineReducers } from "redux";

export const app =  combineReducers({
    users:getUsers,
    view:viewReducer,
    filter: filterReducer,
    isLoading: isLoadingReducer,
    error: errorReducer

})
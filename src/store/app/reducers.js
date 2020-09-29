import { createReducer } from '../utils';
import * as types from './types';

export const initialState = [];

export const reducer = createReducer(initialState, {
	'@@router/LOCATION_CHANGE'(state) {
		return state;
	}
	
});

export const getUsers = (state=initialState, action)=>{

	switch (action.type){
		case types.GET_USERS_SUCCESS:
			return [...action.payload.users];
		case	types.GET_USERS_ERROR:
			return state
		default: return state	
}
}

export const errorReducer =(state=null, {type, payload})=>{
	switch (type){
		case types.GET_USERS_ERROR:
			return payload.error
		default: return state
	};
	
}
export const viewReducer = (state='grid', action )=>{

	switch (action.type){
		case types.GET_VIEW:
			return state
		case types.SET_VIEW:
			return	action.payload
		default: return state
	}
}

export const filterReducer = (filteredContacts={}, action )=>{
	switch (action.type){
		case types.FILTER_CONTACTS:
			return filteredContacts
		default: return filteredContacts
	}
}


export const isLoadingReducer =(isLoading=false, action)=>{
	switch (action.type){
		case types.GET_USERS_START:
			return true;
		case types.GET_USERS_SUCCESS:
		case types.GET_USERS_ERROR:
			return false;
		
		default: return isLoading
	}
}

/*
export const filterAction = (signObj) => {
  return (dispatch, getState)=>{
    let filtredList = [ ...getState().noFilterList]; 
    Object.keys(signObj).map((signName)=>{
      filtredList.filter((item)=>( item[signName] ===  signObj[signName]))
    });
    dispatch({ type: types.GET_USERS_START, payload: filtredList}); 
  }
}
*/
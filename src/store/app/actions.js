import {createAction} from '../utils';
import * as types from './types';
export const OActionTypes = {
  prefix: '@app',
};

export const getUsersStart = createAction(types.GET_USERS_START)

export const getUsersSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  payload: {
    users: users.results,
  },
});

export const getUsersError = error => ({
  type: types.GET_USERS_START,
  payload: {
    error: error,
  },
});

export const getView = (createAction(types.GET_VIEW))

export const setView = view => ({
  type: types.SET_VIEW,
  payload: { 
	  view: view 
	},
});

export const filterContacts = values=>({
  type: types.FILTER_CONTACTS,
  payload:{
    name: values.name,
    nationality: values.nationality,
    gender: values.gender
  }
})
///розобратись
export const setIsloading = (isLoading)=>({
  type: types.GET_ISLOADING,
  payload:{
    isLoading:isLoading
  }
})
export const getIsloading = (createAction(types.GET_ISLOADING))

export const filterAction = (objectFilter) => {
  return (dispatch, getState)=>{
    let filtredList = [ ...getState().noFilterList]; // Не фильтрованный список
    Object.keys(objectFilter).map((filterName)=>{
      filtredList.filter((item)=>( item[filterName] ===  objectFilter[filterName]))
    });
    dispatch({ type: types.FILTER_CONTACTS, payload: filtredList});  // устанавливает state.filterdList
  }
}


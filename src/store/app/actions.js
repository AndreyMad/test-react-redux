import {createAction} from '../utils';
import * as types from './types';
export const OActionTypes = {
  prefix: '@app',
};

export const getUsersStart = createAction(types.GET_USERS_START);

export const getUsersSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  payload: {
    users: users.results,
  },
});
export const getUsersError = error => ({
  type: types.GET_USERS_ERROR,
  payload: {
    error: error,
  },
});


export const setView = view => ({
  type: types.SET_VIEW,
  payload: { 
	  view: view 
	},
});

export const setFilterValues = values=>({
  type: types.SET_FILTER_VALUES,
  payload:{
    values:values
  }
})

export const filterContacts = values=>({
  type: types.FILTER_CONTACTS,
  payload:{
    name: values.name,
    nationality: values.nationality,
    gender: values.gender
  }
})





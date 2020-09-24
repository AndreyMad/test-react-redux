import { createReducer } from '../utils';
// import { OActionTypes as app } from './actions';

export const initialState = {};

export const reducer = createReducer(initialState, {
	'@@router/LOCATION_CHANGE'(state) {
		return state;
	},
});

export const viewReducer= (state = 'grid', action)=>{
	switch (action.type){
		// case types.VIEW :
		// 	return {
		// 		state: action.payload
		// 	}
		// 	default: return state
	}
}
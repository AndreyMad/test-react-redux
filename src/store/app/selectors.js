import { createSelector } from 'reselect';

const _getAppState = (state) => state.app;

export const getAppState = createSelector(
	[_getAppState],
	(app) => app,
);
export const getUsers = state => state.app.users;
export const gitFilterValue = state=>state.app.filter;


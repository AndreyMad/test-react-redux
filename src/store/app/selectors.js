import { createSelector } from 'reselect';

const _getAppState = (state) => state.app;

export const getAppState = createSelector(
	[_getAppState],
	(app) => app,
);

export const getUsers = state => state.app.users;
export const getView = state => state.app.view;
export const getNationalityFromFilter = state => state.app.filter.nationality;
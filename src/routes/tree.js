import {
	PageHome,
} from 'pages';
import {
	PageContacts,
} from 'pages';

const routes = {
	'home': {
		path: '/',
		page: PageHome,
		name: 'Home',
		link () {
			return this.path;
		},
		exact: true,
	},
	'contacts': {
		path: '/contacts',
		page: PageContacts,
		name: 'PageContacts',
		link () {
			return this.path;
		},
		exact: true,
	}
};

const __ROOT_ROUTE__ = routes.home.link();

export { routes, __ROOT_ROUTE__ };

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Home } from './view';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = null;

const PageHome = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Home);

export { PageHome };

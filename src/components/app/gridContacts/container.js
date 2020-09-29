import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => ({

	isLoading: state.app.isLoading
});

const mapDispatchToProps = null;

const GridContacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { GridContacts };

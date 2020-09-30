import { compose } from 'redux';
import { connect } from 'react-redux';
import  View  from './view';
import { setView } from 'store/app/actions';
import * as selectors from '../../../store/app/selectors';

const mapStateToProps = (state) => ({
	isLoading: state.app.isLoading
});

const mapDispatchToProps = dispatch=>({
	setView: (view)=>dispatch(setView(view))

	
})

const Filter = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { Filter };

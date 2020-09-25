import { compose } from 'redux';
import { connect } from 'react-redux';
import  View  from './view';
import { setView ,filterContacts} from 'store/app/actions';
import * as selectors from '../../../store/app/selectors';

const mapStateToProps = (state) => ({
	view: selectors.getView(state)
});

const mapDispatchToProps = dispatch=>({
	setView: (view)=>dispatch(setView(view)),
	filter: (values)=>dispatch(filterContacts(values))
})

const Filter = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { Filter };

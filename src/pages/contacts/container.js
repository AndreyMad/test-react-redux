import { compose } from 'redux';
import { connect } from 'react-redux';
import { Contacts } from './view';
import * as selectors from '../../store/app/selectors';
import * as operations from '../../store/app/operations';



const mapStateToProps = state => ({
	users : selectors.getUsers(state)
});

const mapDispatchToProps = dispatch=>({
	getUsers: ()=>dispatch(operations.getUsers())
})




const PageContacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Contacts);

export { PageContacts };


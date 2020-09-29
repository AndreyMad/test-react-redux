import * as actions from "./actions";
import * as API from "../../services/index";

export const getUsers = () => dispatch => {
  dispatch(actions.getUsersStart());

  API.getUsers()
    .then(res => {
      console.log(res);
      dispatch(actions.getUsersSuccess(res.data));
    
    })
    .catch(err =>{console.log('asdasd'); 
    dispatch(actions.getUsersError(err))});
};

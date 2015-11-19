/**
 * Created by dav on 2015-11-19.
 */
import actions from '../actions/loginActions'
import { connect } from 'react-redux'
import store from '../store'
import userAction from '../actions/userActions'
import removeSoon from '../actions/loginActions'

//Todo implement login and logout as when submit.js make a submit, that this class check if its valid data

const upstate = (state) => state.userState;
const mapStateToProps = (dispatch) => {
    return {
        login() {
            console.log("Run login");
            dispatch(actions.login());
        },
        logout() {
            console.log("Run logout");
            dispatch(actions.logout());
        }
    }
};

export default connect( upstate, mapStateToProps)
import React, { Component, PropTypes } from 'react'
import actions from '../actions'
import { connect } from 'react-redux'

class Authenticate extends Component{


    render(){
        // isLoggedIn is injected from the store and has a dependency to action.js
        const { login,logout } = this.props;
        return(
            <div>
                <h4>Login</h4>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Login</button>
            </div>
        )
    }
}


Authenticate.propTypes  = {
    login : PropTypes.func.isRequired
};

const upstate = (state) => state.authentication;
//Todo last link to change state.
const mapStateToProps = (dispatch) => {
    return {
        login() {
            dispatch(actions.login());
        },
        logout() {
            dispatch(actions.logout());
        }
    }
};

export default connect( upstate, mapStateToProps)(Authenticate)
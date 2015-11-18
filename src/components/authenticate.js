import React, { Component, PropTypes } from 'react'
import actions from '../actions'
import { connect } from 'react-redux'

class Authenticate extends Component{

    //Todo: implement an service class for faking auth.

    render(){
        // isLoggedIn is injected from the store and has a dependency to action.js
        const { login, logout, isLoggedIn } = this.props;
        return(
            <div>
                <h2>LoginView</h2>

                {isLoggedIn ? (
                    <div>
                        <h4>Want to log out?</h4>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h4>Want to login?</h4>
                        <button onClick={login}>Login</button>
                        <label><input ref="email" placeholder="email" defaultValue="myEmail@mail.com" /></label>
                        <label><input ref="pass" placeholder="password" /></label>
                    </div>
                )}
            </div>
        )
    }
}

Authenticate.propTypes  = {
    login : PropTypes.func.isRequired,
    logout : PropTypes.func.isRequired
};

const upstate = (state) => state.loginState;
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
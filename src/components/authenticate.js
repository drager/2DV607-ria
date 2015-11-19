import React, { Component, PropTypes } from 'react'
import actions from '../actions'
import { connect } from 'react-redux'
import { Link }  from 'react-router'



class Authenticate extends Component{
    // On submit extract email and password from this.
      handleSubmit() {
          const email = this.refs.email.value;
          const pass = this.refs.password.value;
          console.log(email);
          console.log(pass);
    }

    render(){
        // isLoggedIn is injected from the store and has a dependency to action.js
        const {logout, isLoggedIn } = this.props;
        return(
            <div>
                <p><Link to="/">To home view</Link></p>
                {isLoggedIn ? (
                    <div>
                        <h4>Want to log out?</h4>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h4>Want to login?</h4>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
                            <label><input ref="password" placeholder="password" /></label>
                            <button type="submit">login</button>
                        </form>
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
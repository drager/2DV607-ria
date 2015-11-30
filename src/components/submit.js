import React, { Component, PropTypes } from 'react'
import loginActions from '../actions/loginActions'
import userActions from '../actions/userActions'
import { connect } from 'react-redux'
import { Link }  from 'react-router'


const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit(user) {
            dispatch(userActions.submitUser(user));
        },
        logout(){
            dispatch(loginActions.logout())
        }
    }
};


class Submit extends Component {
      handleSubmit() {
          const user = {
                email : this.refs.email.value,
                password : this.refs.password.value
          };
          this.props.submit(user);
    }

    render(){
        return(
            <div>
                <p><Link to="/">To home view</Link></p>
                {this.props.loginState.isLoggedIn ? (
                    <div>
                        <h4>Want to log out? user with email: {this.props.userState.email}</h4>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h4>Want to login?</h4>
                        <p>to login email is fakeEmail@fakemail.com and pass is 123</p>
                        <form onSubmit={ () => this.handleSubmit()}>
                            <label><input ref="email" placeholder="email" defaultValue="fakeEmail@fakemail.com" /></label>
                            <label><input ref="password" placeholder="password" /></label>
                            <button type="submit">login</button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

Submit.propTypes  = {
    submit : PropTypes.func.isRequired,
    logout : PropTypes.func.isRequired
};

export default connect( mapStateToProps, mapDispatchToProps)(Submit);

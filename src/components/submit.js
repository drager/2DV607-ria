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
        submit(){
            dispatch(userActions.submitUser())
        },
        login(){
            dispatch(loginActions.login())
        },
        logout(){
            dispatch(loginActions.logout())
        }
    }
};


class Submit extends Component {
      handleSubmit() {
          this.props.userState.email = this.refs.email.value;
          this.props.userState.password = this.refs.password.value;
          this.props.userState.username ="Hardcoded in submit.js";
          this.props.submit();

          // TODO : Refactor login()  to some class or component that listen on submit, and then
          //check the submitted values against hardcoded data and that class instead set login()
          this.props.login();
    }

    render(){
        return(
            <div>
                <p><Link to="/">To home view</Link></p>
                {this.props.loginState.isLoggedIn ? (
                    <div>
                        <h4>Want to log out?</h4>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h4>Want to login?</h4>
                        <form onSubmit={ () => this.handleSubmit()}>
                            <label><input ref="email" placeholder="email" defaultValue="david@example.com" /></label>
                            <label><input ref="password" placeholder="password" /></label>
                            <button type="submit">login</button>
                        </form>
                    </div>
                )}
            </div>
        )
    }
}

Submit.propTypes  = {
    submit : PropTypes.func.isRequired
};



export default connect( mapStateToProps, mapDispatchToProps)(Submit)
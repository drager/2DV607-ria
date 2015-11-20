/**
 * Created by dav on 2015-11-16.
 */
import React, { Component } from 'react';
import { Link }  from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Hello World!</h2>
                <p>Todo: implement a home component</p>
                <p><Link to="/auth">login view </Link></p>
                <p>Email : {this.props.userState.email}</p>
                <p>Password : {this.props.userState.password}</p>
                {this.props.loginState.isLoggedIn ? (
                        <h4>You are logged in</h4>
                ) : (
                        <h4>You are not logged in</h4>
                )}
            </div>
        )
    }
}

export default connect( mapStateToProps)(Home)
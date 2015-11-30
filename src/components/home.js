/**
 * Created by dav on 2015-11-16.
 */
import React, { Component } from 'react';
import { Link }  from 'react-router'
import { connect } from 'react-redux'


import { AppBar, IconButton, FlatButton, LeftNav} from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'



const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

export default class Home extends Component {


    constructor() {
        super();

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(e) {
        e.preventDefault();
        this.refs.leftNav.toggle();
    }


    render() {
        return (

            <div>
                <AppBar
                    title={<span>My portfolio</span>}
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={<FlatButton label="Login" />} />



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
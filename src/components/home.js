/**
 * Created by dav on 2015-11-16.
 */
import React, { Component } from 'react';
import { Link }  from 'react-router'
import { connect } from 'react-redux'
import Submit from './submit'


import { AppBar, IconButton, FlatButton, LeftNav, MenuItem} from 'material-ui'
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
        var menuItems = [{
            type: MenuItem.Types.LINK,
            payload: '#/',
            text: 'Home'
        }];
        if(!this.props.loginState.isLoggedIn){
            menuItems.push({
                type: MenuItem.Types.LINK,
                payload: '#/auth',
                text: 'Login'
            })
        }
        return (
            <div>

                <div id="page_container">

                    <LeftNav
                        ref="leftNav"
                        docked={false}
                        menuItems={menuItems}>

                    <Submit/>
                </LeftNav>

                    <header>
                        <AppBar title='Portfolio under constructing.' onLeftIconButtonTouchTap={this._handleClick}
                                isInitiallyOpen={true}
                        />
                    </header>

                </div>

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
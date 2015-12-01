/**
 * Created by dav on 2015-11-16.
 */
import React, { Component } from 'react';
import { Link }  from 'react-router';
import { connect } from 'react-redux';
import Submit from './submit';
import {Layout,Header,Navigation,Drawer,Content, Button, Card} from 'react-mdl';





const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

export default class Home extends Component {
    render() {
        return (
            <div style={{height: '500px', position: 'relative'}}>
                <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                    <Header transparent title="Title" style={{color: 'white'}}>
                        <Navigation>
                            {this.props.loginState.isLoggedIn ? (
                                <Link to="/auth">Logout</Link>
                            ) : (
                            <Link to="/auth">Login</Link>
                            )}
                        </Navigation>
                    </Header>
                    <Drawer title="Portfolio Contents">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/auth">Login</Link>
                            <Link to="/notImplemented">About me</Link>
                            <Link to="/notImplemented">Add to portfolio</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        {this.props.children}
                        </Content>
                </Layout>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);

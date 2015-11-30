/**
 * Created by dav on 2015-11-16.
 */
import React, { Component } from 'react';
import { Link }  from 'react-router'
import { connect } from 'react-redux'
import Submit from './submit'
import {Layout,Header,Navigation,Drawer,Content, Button, Card} from 'react-mdl'





const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

export default class Home extends Component {
    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                    <Header transparent title="Title" style={{color: 'white'}}>
                        <Navigation>
                            <Button onClick={() => { console.log("click") }} accent>Login</Button>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <a href="">Link</a>
                            <p>dsa</p>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <Card id="submit" style={{alignItems: 'flex-start', color: '#fff', visibility:'false'}} />
                        <Submit/>
                        <p>To Login Email: "fake@fakemail.com"</p>
                        <p>To Login password: 123"</p>
                        </Content>
                </Layout>
            </div>
        )
    }
}
export default connect( mapStateToProps)(Home)
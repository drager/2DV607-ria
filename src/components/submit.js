import React, { Component, PropTypes} from 'react';
import userActions from '../actions/userActions';
import { connect } from 'react-redux';
import { Link, Navigation }  from 'react-router';
import { Textfield, Button, Card, CardTitle, CardText, CardActions } from 'react-mdl';
import Home from './home'


const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit(user) {
            dispatch(userActions.loginUser(user))
                .then( ()  => {
                    console.log("go to home view again")
            })
                .catch(bbb => console.log(bbb))
        },
        logout(){
            dispatch(userActions.logoutUser())

        }
    }
};

class Submit extends Component {
      handleSubmit() {
          const user = {
              email: this.refs.email.refs.input.value,
              password: this.refs.password.refs.input.value
          };
          this.props.submit(user);
      }

     redirect (){
        this.props.history.pushState(null, '/');
    }

    render(){
        return(

            <div>
                {this.props.loginState.isLoggedIn ? (
                    <div>
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: 'Black', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Logout: {this.props.userState.email} ?</CardTitle>
                            <CardText>
                                <Button accent style={ { float : 'left'}} onClick={ () => this.redirect() }>No I rather stay</Button>
                                <Button primary style={ { float : 'right'}} onClick={this.props.logout}>Logout</Button>
                            </CardText>
                        </Card>

                    </div>
                ) : (
                <div>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: 'Black', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Email:fake@fakemail.com, Hint: Pass: 123</CardTitle>
                        <CardText>
                            <form onSubmit={ () => this.handleSubmit()}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Email..."
                                    style={{width: '200px'}}
                                    ref="email"

                                />
                                <Textfield
                                    onChange={() => {}}
                                    label="Password..."
                                    style={{width: '200px'}}
                                    ref="password"
                                />
                                <Button primary type="submit">Login</Button>
                            </form>
                        </CardText>
                    </Card>
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

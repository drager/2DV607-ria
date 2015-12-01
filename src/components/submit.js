import React, { Component, PropTypes} from 'react';
import userActions from '../actions/userActions';
import { connect } from 'react-redux';
import { Link, Redirect }  from 'react-router';
import { Textfield, Button, IconButton, Menu, MenuItem,Card,CardTitle,CardText,CardActions } from 'react-mdl';

const mapStateToProps = (state) =>  {
    return {
        loginState : state.loginState,
        userState : state.userState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit(user) {
            dispatch(userActions.loginUser(user));
        },
        logout(){
            dispatch(userActions.logoutUser());
        }
    }
};

class Submit extends Component {
      handleSubmit() {
          console.log("ref: ", this.refs.email);
          const user = {
                email : this.refs.email.refs.input.value,
                password : this.refs.password.refs.input.value
          };
          this.props.submit(user);
    }

    render(){
        return(

            <div>
                {this.props.loginState.isLoggedIn ? (
                    <div>
                        <p>{this.props.userState.email}</p>
                        <Button onClick={this.props.logout}>Logout</Button>
                    </div>
                ) : (
                <div>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                            <form onSubmit={ () => this.handleSubmit()}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Text..."
                                    style={{width: '200px'}}
                                    ref="email"

                                />
                                <Textfield
                                    onChange={() => {}}
                                    label="Password..."
                                    style={{width: '200px'}}
                                    ref="password"
                                />
                                <Button type="submit">Login</Button>
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

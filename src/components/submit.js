import React, { Component, PropTypes} from 'react'
import loginActions from '../actions/loginActions'
import userActions from '../actions/userActions'
import { connect } from 'react-redux'
import { Link, Redirect }  from 'react-router'

import { Textfield, Button, IconButton, Menu, MenuItem } from 'react-mdl'

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
          console.log(this.refs.email);
          const user = {
                email : this.refs.email.refs.input.value,
                password : this.refs.password.refs.input.value
          };
          this.props.submit(user);
          this.props.userState.email = user.email;
    }

    render(){
        return(



            <div>
                {this.props.loginState.isLoggedIn ? (
                    <div>
                        <p>{this.props.userState.email}</p>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                ) : (
                        <form onSubmit={ () => this.handleSubmit()}>
                            <div>
                                <MenuItem>
                                <Textfield
                                    onChange={() => {}}
                                    label="Text..."
                                    style={{width: '200px'}}
                                    ref="email"
                                    placeholder="email"

                                />
                                    </MenuItem>
                                <Textfield
                                    onChange={() => {}}
                                    label="Text..."
                                    style={{width: '200px'}}
                                    ref="password"
                                    placeholder="Password"
                                />
                                <Button id="submitButton" type="submit" accent>Login</Button>
                            </div>
                        </form>
                )}
            </div>
        );
    }
}

/*  <div>
 <form onSubmit={ () => this.handleSubmit()}>
 <div>
 <Textfield
 onChange={() => {}}
 label="Text..."
 style={{width: '200px'}}
 ref="email"
 placeholder="email"
 />

 <Textfield
 onChange={() => {}}
 label="Text..."
 style={{width: '200px'}}
 ref="password"
 placeholder="Password"
 />
 <Button type="submit" accent>Login</Button>
 </div>
 </form>
 </div>*/

Submit.propTypes  = {
    submit : PropTypes.func.isRequired,
    logout : PropTypes.func.isRequired
};

export default connect( mapStateToProps, mapDispatchToProps)(Submit);

import React, { Component, PropTypes} from 'react';
import userActions from '../../actions/userActions';
import { connect } from 'react-redux';
import { Login } from './login';
import { Logout } from './logout';
import { immediateDebounce } from '../../utils/debouncer';

class Auth extends Component {
    render() {
        if (this.props.loginState.isLoggedIn) {
            return <Logout userState={this.props.userState} logout={this.props.logout}/>;
        } else {
            return <Login loginOnSubmit={immediateDebounce(1000, (refs) => {
                if (refs.email.refs) {
                  const user = {
                      email: refs.email.refs.input.value,
                      password: refs.password.refs.input.value
                  };
                  this.props.login(user);
                }
            })
          } />;
        }
    }
}

Auth.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState,
        userState: state.userState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login(user) {
            dispatch(userActions.loginUser(user))
        },
        logout() {
            dispatch(userActions.logoutUser())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

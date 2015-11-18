import React from 'react'
import actions from '../actions'
import { connect } from 'react-redux'

class Authenticate extends React.Component{


    render(){
        Console.log(this);
        const login = this.props;
        return(
            <div>
                <h4>Login</h4>h4>
                <button onClick={login}>Login</button>
            </div>
        )
    }
}

console.log(Authenticate);

Authenticate.propTypes  = {
    login : React.PropTypes.func.isRequired
};

//TODO Continue here, implement so state can be connected to redux on change.
const upstate = (state) => state.authentication;

const mapDispatchToProps = (dispatch) => {
    console.log(actions.authenticate());
    return {
        authentication() {
            dispatch(actions.authenticate());
        }
    }
};

export default connect(upstate, mapDispatchToProps)(Authenticate)
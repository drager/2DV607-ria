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

//TODO Continue here, implement so state can be connnected to store on change.
const mapStateToProps = (state) => state.authentication;

export default connect(mapStateToProps)(Authenticate)
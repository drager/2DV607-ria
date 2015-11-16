import React from 'react.'
import ReactDom from 'react-dom'

class Authenticate extends React.Component{

    render(){
        const login = this.props;
        return(
            <div>
                <h4>Login</h4>h4>
                <button onClick={login}>Login</button>
            </div>
        )
    }

    propTypes : {
            login : React.PropTypes.func.isRequired
        }
}

export default Authenticate
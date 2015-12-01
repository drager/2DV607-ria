import React, { Component, PropTypes} from 'react';
import userActions from '../actions/userActions';
import {
  Textfield,
  Button,
  Card,
  CardTitle,
  CardText,
  CardActions
} from 'react-mdl';

export class Login extends Component {

  render() {
    return (
      <div>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: 'Black', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Email:fake@fakemail.com, Hint: Pass: 123</CardTitle>
          <CardText>
            <form onSubmit={() => this.handleSubmit()}>
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
    )
  }

  handleSubmit() {
    const user = {
      email: this.refs.email.refs.input.value,
      password: this.refs.password.refs.input.value
    };
    this.props.login(user);
  }
}

Login.propTypes  = {
  login: PropTypes.func.isRequired,
};

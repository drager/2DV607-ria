import React, { Component, PropTypes} from 'react';
import { Button, Card, CardTitle, CardText } from 'react-mdl';
import { Link }  from 'react-router';

export const Logout = ({logout}) => (
    <div>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardText>
                <Link to='/'>
                    <Button accent style={{float: 'left'}}>
                        No I rather stay
                    </Button>
                </Link>
                <Button primary style={{float: 'right'}}
                        onClick={logout}>
                    Logout
                </Button>
            </CardText>
        </Card>
    </div>
);

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};

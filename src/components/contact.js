/**
 * Created by dav on 2015-12-03.
 */
/**
 * Created by dav on 2015-12-03.
 */
import React, {Component} from 'react'
import {Card,CardTitle,CardText,CardActions,Button} from 'react-mdl'

export class Contact extends Component {
    render(){
        return (
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{  color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Contacts</CardTitle>
                <CardText>
                    <ul>
                        <li>
                           Email: david.grenmyr@hotmail.com
                        </li>
                        <li>
                            Phone: 070 259 6668
                        </li>
                        <li>
                            Skype: david.grenmyr
                        </li>
                    </ul>
                </CardText>
            </Card>
        )
    }
}